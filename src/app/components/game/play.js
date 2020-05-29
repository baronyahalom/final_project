let r = 20;
let w = r*2*(Math.sqrt(3)/2);
let ctx;
let canvas;
let sel = [-1, -1];
let board = new Array(14);
let hist = [];
let player = 0;
let multiplayer = false;
let active = true;

var i, j, k, IsOver=true, IsStart0, Start, Start0, Size=14, IsRunning=false, LastEvent="";
var MoveCount, MaxMoveCount, MaxFld=Size*Size, IsSwap, ActiveColor=0;
IsPlayer = new Array(2);
Level = new Array(2);
ImgNum = new Array(Size);
for (i=0; i<Size; i++)
    ImgNum[i] = new Array(Size);
Fld = new Array(Size);
for (i=0; i<Size; i++)
    Fld[i] = new Array(Size);
Pot = new Array(Size);
for (i=0; i<Size; i++)
    Pot[i] = new Array(Size);
for (i=0; i<Size; i++)
{ 
    for (j=0; j<Size; j++)
        Pot[i][j] = new Array(4);
}
Bridge = new Array(Size);
for (i=0; i<Size; i++)
    Bridge[i] = new Array(Size);
for (i=0; i<Size; i++)
{ 
    for (j=0; j<Size; j++)
        Bridge[i][j] = new Array(4);
}
Upd = new Array(Size);
for (i=0; i<Size; i++)
    Upd[i] = new Array(Size);
History = new Array(MaxFld+1);
for (i=0; i<MaxFld+1; i++)
    History[i] = new Array(2);


//define who start the game - true for real player and false for computer player
IsStart0=true;
//define which player is playing for now, 0- real player, 1- computer player
IsPlayer[0]=true;
IsPlayer[1]=false;
//define which level each player when both of the players are computers
Level[0]=2;
Level[1]=3;

//set AI to 0 means it's false and it's not AI 
 var IsAI=0;

function Init()
{
    if (IsRunning)
    {
        LastEvent="Init()";
        return;
    }
    //fill Fld with zeroes - empty board
    let ii, jj;
    for (ii=0; ii<Size; ii++)
    {
        for (jj=0; jj<Size; jj++)
            Fld[ii][jj]=0;
    }
    //checking which player is starting 
    if (IsStart0)
        Start0=true;
    else
        Start0=false;
    
    MoveCount=0;
    MaxMoveCount=0;
    
    WritePot(true);
    IsOver=false;
    /*if ((MoveCount+Start0)%2==0) window.document.OptionsForm.Msg.value=" Blue to move.";
    else window.document.OptionsForm.Msg.value=" Red to move.";*/
}

function SetOption(nn, mm)
{
    if (IsRunning)
    {
        LastEvent="SetOption("+nn+","+mm+")";
        return;
    }
    if (nn<2)
    { if (mm==0)
        IsPlayer[nn]=true;
    else
        IsPlayer[nn]=false;
    }
    else IsStart0=mm;
}

function SetLevel(nn, mm)
{ 
    if (IsRunning) 
    { 
        LastEvent="SetLevel("+nn+","+mm+")"; 
        return; 
    }
    Level[nn]=mm;
}


function ShowAI(bb)
{ var ww;
    IsAI=bb;
    if (IsAI)
    { WritePot(true);
        document.getElementById('AI').style.display='inline';
        ww=parseInt(window.top.innerWidth);
        if (ww<840) window.top.resizeBy(840-ww, 0);
    }
    else document.getElementById('AI').style.display='none';
}

function Timer()
{
    if (LastEvent!="")
    {
        eval(LastEvent);
        LastEvent="";
        return;
    }
    if (IsOver)
        return;
    if (IsRunning)
        return;
    if (IsPlayer[(MoveCount+Start0+1)%2])
    {
        WritePot(true);
        return;
    }
    IsRunning=true;
    let ll = Level[(MoveCount+Start0+1)%2];
    //if (SwapTest()) return;
    GetPot(ll);
    setTimeout("GetBestMove("+eval(((MoveCount+1+Start0)%2)*2-1)+","+ll+")",10);
}

function Back()
{
    if (IsRunning)
    {
        LastEvent="Back()";
        return;
    }
    if (MoveCount>0)
    {
        IsOver=false;
        MoveCount--;
        let ii=History[MoveCount][0];
        let jj=History[MoveCount][1];
        if ((MoveCount==1)&&(IsSwap))
        {
            Fld[jj][ii]=0;
            //RefreshPic(jj, ii);
            draw();
            Fld[ii][jj]=((MoveCount+Start0)%2)*2-1;
            //RefreshPic(ii, jj);
            draw();
        }
        else
        {
            Fld[ii][jj]=0;
            //RefreshPic(ii, jj);
            draw();
        }
        /*if (MoveCount<10)
            window.document.OptionsForm.Moves.value=" "+eval(MoveCount)+" ";
        else
            window.document.OptionsForm.Moves.value=MoveCount;
        if ((MoveCount+Start0)%2==0) window.document.OptionsForm.Msg.value=" Blue to move.";
        else window.document.OptionsForm.Msg.value=" Red to move.";*/
        WritePot(true);
    }
}

function Replay()
{ if (IsRunning) { LastEvent="Replay()"; return; }
    if (MoveCount<MaxMoveCount)
    { var ii=History[MoveCount][0];
        var jj=History[MoveCount][1];
        if (MoveCount<MaxMoveCount-1) { MakeMove(ii, jj, false); WritePot(true); }
        else MakeMove(ii, jj, true);
    }
}

function GetMoveList()
{ var ii, jj, nn, ss="";
    for (nn=0; nn<MaxMoveCount; nn++)
    { ii=History[nn][0];
        jj=History[nn][1];
        if (nn>0) ss+=" ";
        ss+=String.fromCharCode(65+jj)+eval(ii+1);
    }
    window.document.OptionsForm.MoveList.value=ss;
}

function ApplyMoveList()
{ if (IsRunning) { LastEvent="ApplyMoveList()"; return; }
    Init();
    var ii, jj, nn, ss=window.document.OptionsForm.MoveList.value;
    ss=ss.split(" ");
    for (nn=0; nn<ss.length; nn++)
    { jj=ss[nn].charCodeAt(0)-65;
        ii=parseInt(ss[nn].substr(1,2))-1;
        if (isNaN(ii)||isNaN(jj)||(ii<0)||(jj<0)||(ii>=Size)||(jj>=Size)) return;
        if (nn<ss.length-1) MakeMove(ii, jj, false);
        else MakeMove(ii, jj, true);
    }
}

function SwapTest()
{ if (! window.document.OptionsForm.Swap.checked) return(false);
    var ii, jj;
    if (MoveCount==0)
    { ii=random(4);
        jj=random(4-ii);
        if (random(2)<1)
        { ii=Size-1-ii;
            jj=Size-1-jj;
        }
        MakeMove(ii, jj, false);
        WritePot(true);
        IsRunning=false;
        return(true);
    }
    if (MoveCount==1)
    { for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<Size; jj++)
    { if (Fld[ii][jj]!=0)
    { if ((ii+jj<2)||(ii+jj>2*Size-4)) return(false);
        if ((ii+jj==2)||(ii+jj==2*Size-4)) { if (random(2)<1) return(false); }
        MakeMove(ii, jj, false);
        WritePot(true);
        IsRunning=false;
        return(true);
    }
    }
    }
    }
    return(false);
}

function checkWin(c)
{
    var open = [], openPrev = [], closed = [], closedPrev = [];
    for(var a=0; a<14; a++)
    {
        if(Fld[c==1?a:0][c==1?0:a] == c)
        {
            open.length = openPrev.length = closed.length = closedPrev.length = 0;
            var pathFound = false;
            open.push([c==1?a:0, c==1?0:a]);
            openPrev.push(-1);
            while(open.length > 0)
            {
                var u = open[0];
                open.splice(0, 1);
                var uI = openPrev.splice(0, 1);
                closed.push(u);
                closedPrev.push(uI);
                if(u[c==1?1:0] == 13)
                {
                    pathFound = true;
                    break;
                }
                var connections = getConnections(u[0], u[1], c, open, closed);
                for(var i=0; i<connections.length; i++)
                {
                    open.push(connections[i]);
                    openPrev.push(closed.length-1);
                }
            }
            if(pathFound)
            {
                var path = [];
                var u = closed.length-1;
                while(closedPrev[u] != -1)
                {
                    path.push(closed[u]);
                    u = closedPrev[u];
                }
                path.push([c==1?a:0, c==1?0:a]);
                path.reverse();
                active = false;
                return path;
            }
        }
    }
    return false;
}

function MakeMove(ii, jj, oo)
{
    let ccol, kk, iis=ii, jjs=jj;
    /*if (MoveCount==1)
    {
        if (Fld[ii][jj]!=0)
        {
            Fld[ii][jj]=0;
            draw()
            iis=jj;
            jjs=ii;
            IsSwap=1;
        }
        else
            IsSwap=0;
    }*/
    ccol=((MoveCount+1+Start0)%2)*2-1;
    Fld[iis][jjs]=ccol;
    draw();
    if (History[MoveCount][0]!=ii)
    { History[MoveCount][0]=ii;
        MaxMoveCount=MoveCount+1;
    }
    if (History[MoveCount][1]!=jj)
    { History[MoveCount][1]=jj;
        MaxMoveCount=MoveCount+1;
    }
    MoveCount++;
    if (MaxMoveCount<MoveCount)
        MaxMoveCount=MoveCount;
    /*if (MoveCount<10)
        window.document.OptionsForm.Moves.value=" "+eval(MoveCount)+" ";
    else
        window.document.OptionsForm.Moves.value=MoveCount;
    if ((MoveCount+Start0)%2==0) window.document.OptionsForm.Msg.value=" Blue to move.";
    else window.document.OptionsForm.Msg.value=" Red to move.";
    if ((MoveCount==2)&&(IsSwap>0))
        window.document.OptionsForm.Msg.value=" Swap."+window.document.OptionsForm.Msg.value;*/
    if (! oo) return;
    GetPot(0);
    GetPot(2);
    //ShowPot();
    WritePot(true);
    if (ccol<0)
    { if ((Pot[ii][jj][2]>0)||(Pot[ii][jj][3]>0)) return;
        //window.document.OptionsForm.Msg.value=" Red has won !";
        let p1 = checkWin(-1);
        drawPath(ctx, p1);
        //alert("You won!");
        Blink(0);
    }
    else
    { if ((Pot[ii][jj][0]>0)||(Pot[ii][jj][1]>0)) return;
        //window.document.OptionsForm.Msg.value=" Blue has won !";
        let p0 = checkWin(1);
        drawPath(ctx, p0);
        alert("The blue player won!");
        Blink(0);
    }
    IsOver=true;
}

function random(nn)
{ return(Math.floor(Math.random()*1000)%nn);
}

function ShowPot()
{ var ii, jj;
    for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<Size; jj++)
        window.document.images[ImgNum[ii][jj]].title =
            Math.round(Pot[ii][jj][2])+"\n"+
            Math.round(Pot[ii][jj][0])+"|"+
            Math.round(Pot[ii][jj][1])+"->"+
            Math.round(Pot[ii][jj][0]+Pot[ii][jj][1])+"\n"+
            Math.round(Pot[ii][jj][3])+"->"+
            Math.round(Pot[ii][jj][2]+Pot[ii][jj][3])+"\n"+
            Math.round(Pot[ii][jj][0]+Pot[ii][jj][1]+Pot[ii][jj][2]+Pot[ii][jj][3])+"\n"+
            Math.round(Bridge[ii][jj][2])+"\n"+
            Math.round(Bridge[ii][jj][0])+"|"+
            Math.round(Bridge[ii][jj][1])+"->"+
            Math.round(Bridge[ii][jj][0]+Bridge[ii][jj][1])+"\n"+
            Math.round(Bridge[ii][jj][3])+"->"+
            Math.round(Bridge[ii][jj][2]+Bridge[ii][jj][3])+"\n"+
            Math.round(Bridge[ii][jj][0]+Bridge[ii][jj][1]+Bridge[ii][jj][2]+Bridge[ii][jj][3])+"\n"+
            Math.round(Pot[ii][jj][0]+Pot[ii][jj][1]+Pot[ii][jj][2]+Pot[ii][jj][3]-
                Bridge[ii][jj][0]-Bridge[ii][jj][1]-Bridge[ii][jj][2]-Bridge[ii][jj][3]);
    }
}

function drawPath(c, p)
{
    c.lineWidth = 10;
    c.beginPath();
    c.moveTo((p[0][0]+p[0][1])*w - (p[0][1]-4)*(w/2), (p[0][1]+2)*1.5*r);
    for(var i=1; i<p.length; i++)
        c.lineTo((p[i][0]+p[i][1])*w - (p[i][1]-4)*(w/2), (p[i][1]+2)*1.5*r);
    c.stroke();
}

function RedPotCol(vv)
{ var xx=0, hh="0123456789abcdef";
    if (vv>0) xx=vv;
    var nn=Math.floor(255/(1+xx/255));
    return("#"+hh.charAt(Math.floor(nn/16))+hh.charAt(nn%16)+"0000");
}
function BluePotCol(vv)
{ var xx=0, hh="0123456789abcdef";
    if (vv>0) xx=vv;
    var nn=Math.floor(255/(1+xx/255));
    return("#0000"+hh.charAt(Math.floor(nn/16))+hh.charAt(nn%16));
}

function WritePot(bb)
{
    let ii, jj;
    //if it's not computer
    if (!IsAI)
        return;
    if (bb)
        GetPot(2);
    for (ii=0; ii<Size; ii++)
    {
        for (jj=0; jj<Size; jj++)
        {   window.document.getElementById("Pot0"+ii+jj).title = Math.round(Pot[ii][jj][0]);
            window.document.getElementById("Pot1"+ii+jj).title = Math.round(Pot[ii][jj][1]);
            window.document.getElementById("Pot2"+ii+jj).title = Math.round(Pot[ii][jj][2]);
            window.document.getElementById("Pot3"+ii+jj).title = Math.round(Pot[ii][jj][3]);
            window.document.getElementById("Pot0"+ii+jj).style.backgroundColor = BluePotCol(Pot[ii][jj][0]);
            window.document.getElementById("Pot1"+ii+jj).style.backgroundColor = BluePotCol(Pot[ii][jj][1]);
            window.document.getElementById("Pot2"+ii+jj).style.backgroundColor = RedPotCol(Pot[ii][jj][2]);
            window.document.getElementById("Pot3"+ii+jj).style.backgroundColor = RedPotCol(Pot[ii][jj][3]);
        }
    }
}

function sign(xx)
{ if (xx<0) return(-1);
    if (xx>0) return(1);
    return(0);
}

function findArr(a, b)
{
    for(var i=0; i<a.length; i++)
        if(JSON.stringify(a[i]) == JSON.stringify(b))
            return i;
    return -1;
}

function getConnections(x, y, c, open, closed)
{
    let a = [-1, 0, 1, 0, 0, -1, 0, 1, 1, -1, -1, 1];
    let ret = [];
    for(let i=0; i<6; i++)
        if(x+a[i*2] >= 0  &&  x+a[i*2] < 14  &&  y+a[i*2+1] >= 0  &&  y+a[i*2+1] < 14)
            if(Fld[x+a[i*2]][y+a[i*2+1]] == c  &&  findArr(open, [x+a[i*2],y+a[i*2+1]]) == -1  &&  findArr(closed, [x+a[i*2],y+a[i*2+1]]) == -1)
                ret.push([x+a[i*2],y+a[i*2+1]]);
    return ret;
}

function GetBestMove(theCol, theLevel)
{ var ii, jj, kk, ii_b, jj_b, ff=0, ii_q=0, jj_q=0, cc, pp0, pp1;
    vv=new Array();
    if (MoveCount>0) ff=190/(MoveCount*MoveCount);
    mm=20000;
    for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<Size; jj++)
    { if (Fld[ii][jj]!=0)
    { ii_q+=2*ii+1-Size;
        jj_q+=2*jj+1-Size;
    }
    }
    }
    ii_q=sign(ii_q);
    jj_q=sign(jj_q);
    for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<Size; jj++)
    { if (Fld[ii][jj]==0)
    { mmp=Math.random()*(49-theLevel*16);
        mmp+=(Math.abs(ii-5)+Math.abs(jj-5))*ff;
        mmp+=8*(ii_q*(ii-5)+jj_q*(jj-5))/(MoveCount+1);
        if (theLevel>2)
        { for (kk=0; kk<4; kk++)
            mmp-=Bridge[ii][jj][kk];
        }
        pp0=Pot[ii][jj][0]+Pot[ii][jj][1];
        pp1=Pot[ii][jj][2]+Pot[ii][jj][3];
        mmp+=pp0+pp1;
        if ((pp0<=268)||(pp1<=268)) mmp-=400; //140+128
        vv[ii*Size+jj]=mmp;
        if (mmp<mm)
        { mm=mmp;
            ii_b=ii;
            jj_b=jj;
        }
    }
    }
    }
    if (theLevel>2)
    { mm+=108;
        for (ii=0; ii<Size; ii++)
        { for (jj=0; jj<Size; jj++)
        { if (vv[ii*Size+jj]<mm)
        { if (theCol<0)//red
        { if ((ii>3)&&(ii<Size-1)&&(jj>0)&&(jj<3))
        { if (Fld[ii-1][jj+2]==-theCol)
        { cc=CanConnectFarBorder(ii-1,jj+2,-theCol);
            if (cc<2)
            { ii_b=ii;
                if (cc<-1) { ii_b--; cc++; }
                jj_b=jj-cc;
                mm=vv[ii*Size+jj];
            }
        }
        }
            if ((ii>0)&&(ii<Size-1)&&(jj==0))
            { if ((Fld[ii-1][jj+2]==-theCol)&&
                (Fld[ii-1][jj]==0)&&(Fld[ii-1][jj+1]==0)&&(Fld[ii][jj+1]==0)&&(Fld[ii+1][jj]==0))
            { ii_b=ii; jj_b=jj; mm=vv[ii*Size+jj]; }
            }
            if ((ii>0)&&(ii<Size-4)&&(jj<Size-1)&&(jj>Size-4))
            { if (Fld[ii+1][jj-2]==-theCol)
            { cc=CanConnectFarBorder(ii+1,jj-2,-theCol);
                if (cc<2)
                { ii_b=ii;
                    if (cc<-1) { ii_b++; cc++; }
                    jj_b=jj+cc;
                    mm=vv[ii*Size+jj];
                }
            }
            }
            if ((ii>0)&&(ii<Size-1)&&(jj==Size-1))
            { if ((Fld[ii+1][jj-2]==-theCol)&&
                (Fld[ii+1][jj]==0)&&(Fld[ii+1][jj-1]==0)&&(Fld[ii][jj-1]==0)&&(Fld[ii-1][jj]==0))
            { ii_b=ii; jj_b=jj; mm=vv[ii*Size+jj]; }
            }
        }
        else
        { if ((jj>3)&&(jj<Size-1)&&(ii>0)&&(ii<3))
        { if (Fld[ii+2][jj-1]==-theCol)
        { cc=CanConnectFarBorder(ii+2,jj-1,-theCol);
            if (cc<2)
            { jj_b=jj;
                if (cc<-1) { jj_b--; cc++; }
                ii_b=ii-cc;
                mm=vv[ii*Size+jj];
            }
        }
        }
            if ((jj>0)&&(jj<Size-1)&&(ii==0))
            { if ((Fld[ii+2][jj-1]==-theCol)&&
                (Fld[ii][jj-1]==0)&&(Fld[ii+1][jj-1]==0)&&(Fld[ii+1][jj]==0)&&(Fld[ii][jj+1]==0))
            { ii_b=ii; jj_b=jj; mm=vv[ii*Size+jj]; }
            }
            if ((jj>0)&&(jj<Size-4)&&(ii<Size-1)&&(ii>Size-4))
            { if (Fld[ii-2][jj+1]==-theCol)
            { cc=CanConnectFarBorder(ii-2,jj+1,-theCol);
                if (cc<2)
                { jj_b=jj;
                    if (cc<-1) { jj_b++; cc++; }
                    ii_b=ii+cc;
                    mm=vv[ii*Size+jj];
                }
            }
            }
            if ((jj>0)&&(jj<Size-1)&&(ii==Size-1))
            { if ((Fld[ii-2][jj+1]==-theCol)&&
                (Fld[ii][jj+1]==0)&&(Fld[ii-1][jj+1]==0)&&(Fld[ii-1][jj]==0)&&(Fld[ii][jj-1]==0))
            { ii_b=ii; jj_b=jj; mm=vv[ii*Size+jj]; }
            }
        }
        }
        }
        }
    }
    MakeMove(ii_b, jj_b, false);
    IsRunning=false;
    if (theCol<0)
    { if ((Pot[ii_b][jj_b][2]>140)||(Pot[ii_b][jj_b][3]>140)) { WritePot(false); return; }
        //window.document.OptionsForm.Msg.value=" Red has won !";
        let p1 = checkWin(-1);
        drawPath(ctx, p1);
        //alert("You won!");
        Blink(-2);
    }
    else
    { if ((Pot[ii_b][jj_b][0]>140)||(Pot[ii_b][jj_b][1]>140)) { WritePot(false); return; }
        //window.document.OptionsForm.Msg.value=" Blue has won !";
        var p0 = checkWin(1);
        drawPath(ctx, p0);
        //alert("The blue player on!");
        Blink(-2);
    }
    IsOver=true;
}

function CanConnectFarBorder(nn, mm, cc)
{ var ii, jj;
    if (cc>0) //blue
    { if (2*mm<Size-1)
    { for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<mm; jj++)
    { if ((jj-ii<mm-nn)&&(ii+jj<=nn+mm)&&(Fld[ii][jj]!=0)) return(2);
    }
    }
        if (Fld[nn-1][mm]==-cc) return(0);
        if (Fld[nn-1][mm-1]==-cc)
        { if (GetFld(nn+2,mm-1)==-cc) return(0);
            return(-1);
        }
        if (GetFld(nn+2,mm-1)==-cc) return(-2);
    }
    else
    { for (ii=0; ii<Size; ii++)
    { for (jj=Size-1; jj>mm; jj--)
    { if ((jj-ii>mm-nn)&&(ii+jj>=nn+mm)&&(Fld[ii][jj]!=0)) return(2);
    }
    }
        if (Fld[nn+1][mm]==-cc) return(0);
        if (Fld[nn+1][mm+1]==-cc)
        { if (GetFld(nn-2,mm+1)==-cc) return(0);
            return(-1);
        }
        if (GetFld(nn-2,mm+1)==-cc) return(-2);
    }
    }
    else
    { if (2*nn<Size-1)
    { for (jj=0; jj<Size; jj++)
    { for (ii=0; ii<nn; ii++)
    { if ((ii-jj<nn-mm)&&(ii+jj<=nn+mm)&&(Fld[ii][jj]!=0)) return(2);
    }
    }
        if (Fld[nn][mm-1]==-cc) return(0);
        if (Fld[nn-1][mm-1]==-cc)
        { if (GetFld(nn-1,mm+2)==-cc) return(0);
            return(-1);
        }
        if (GetFld(nn-1,mm+2)==-cc) return(-2);
    }
    else
    { for (jj=0; jj<Size; jj++)
    { for (ii=Size-1; ii>nn; ii--)
    { if ((ii-jj>nn-mm)&&(ii+jj>=nn+mm)&&(Fld[ii][jj]!=0)) return(2);
    }
    }
        if (Fld[nn][mm+1]==-cc) return(0);
        if (Fld[nn+1][mm+1]==-cc)
        { if (GetFld(nn+1,mm-2)==-cc) return(0);
            return(-1);
        }
        if (GetFld(nn+1,mm-2)==-cc) return(-2);
    }
    }
    return(1);
}

function GetFld(ii, jj)
{ if (ii<0) return(-1);
    if (jj<0) return(1);
    if (ii>=Size) return(-1);
    if (jj>=Size) return(1);
    return(Fld[ii][jj]);
}

function Blink(nn)
{ IsRunning=true;
    if (nn==-2)
    { setTimeout("Blink(-1)",10);
        return;
    }
    if (nn==-1)
    { GetPot(0);
        WritePot(false);
        setTimeout("Blink(0)",10);
        return;
    }
    if (nn==14)
    { IsRunning=false;
        return;
    }
    var ii, jj, cc=(nn%2)*(((MoveCount+Start0)%2)*2-1);
    for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<Size; jj++)
    { if ((Pot[ii][jj][0]+Pot[ii][jj][1]<=0)||(Pot[ii][jj][2]+Pot[ii][jj][3]<=0))
    { Fld[ii][jj]=cc;
        RefreshPic(ii, jj);
    }
    }
    }
    setTimeout("Blink("+eval(nn+1)+")",200);
}

function GetPot(llevel)
{
    let ii, jj, kk, mm, mmp, nn, bb, dd=128;
    ActiveColor=((MoveCount+1+Start0)%2)*2-1;
    for (ii=0; ii<Size; ii++)
    {
        for (jj=0; jj<Size; jj++)
        {
            for (kk=0; kk<4; kk++)
            {
                Pot[ii][jj][kk]=20000;
                Bridge[ii][jj][kk]=0;
            }
        }
    }
    for (ii=0; ii<Size; ii++)
    {
        if (Fld[ii][0]==0)
            Pot[ii][0][0]=dd;//blue border
        else
        {
            if (Fld[ii][0]>0)
                Pot[ii][0][0]=0;
        }
        if (Fld[ii][Size-1]==0)
            Pot[ii][Size-1][1]=dd;//blue border
        else
        {
            if (Fld[ii][Size-1]>0)
                Pot[ii][Size-1][1]=0;
        }
    }
    for (jj=0; jj<Size; jj++)
    {
        if (Fld[0][jj]==0)
            Pot[0][jj][2]=dd;//red border
    else
    {
        if (Fld[0][jj]<0)
            Pot[0][jj][2]=0;
    }
        if (Fld[Size-1][jj]==0)
            Pot[Size-1][jj][3]=dd;//red border
        else
        {
            if (Fld[Size-1][jj]<0)
                Pot[Size-1][jj][3]=0;
        }
    }
    for (kk=0; kk<2; kk++)//blue potential
    {
        for (ii=0; ii<Size; ii++)
        {
            for (jj=0; jj<Size; jj++)
            Upd[ii][jj]=true;
        }
        nn=0;
        do
        { nn++;
            bb=0;
            for (ii=0; ii<Size; ii++)
            {
                for (jj=0; jj<Size; jj++)
            { if (Upd[ii][jj]) bb+=SetPot(ii, jj, kk, 1, llevel);
            }
            }
            for (ii=Size-1; ii>=0; ii--)
            { for (jj=Size-1; jj>=0; jj--)
            { if (Upd[ii][jj]) bb+=SetPot(ii, jj, kk, 1, llevel);
            }
            }
        }
        while ((bb>0)&&(nn<12));
    }
    for (kk=2; kk<4; kk++)//red potential
    { for (ii=0; ii<Size; ii++)
    { for (jj=0; jj<Size; jj++)
        Upd[ii][jj]=true;
    }
        nn=0;
        do
        { nn++;
            bb=0;
            for (ii=0; ii<Size; ii++)
            { for (jj=0; jj<Size; jj++)
            { if (Upd[ii][jj]) bb+=SetPot(ii, jj, kk, -1, llevel);
            }
            }
            for (ii=Size-1; ii>=0; ii--)
            { for (jj=Size-1; jj>=0; jj--)
            { if (Upd[ii][jj]) bb+=SetPot(ii, jj, kk, -1, llevel);
            }
            }
        }
        while ((bb>0)&&(nn<12));
    }
}

var vv=new Array(6);
var tt=new Array(6);
function SetPot(ii, jj, kk, cc, llevel)
{ Upd[ii][jj]=false;
    Bridge[ii][jj][kk]=0;
    if (Fld[ii][jj]==-cc) return(0);
    var ll, mm, ddb=0, nn, oo=0, dd=140, bb=66;
    if (cc!=ActiveColor) bb=52;
    vv[0]=PotVal(ii+1,jj,kk,cc);
    vv[1]=PotVal(ii,jj+1,kk,cc);
    vv[2]=PotVal(ii-1,jj+1,kk,cc);
    vv[3]=PotVal(ii-1,jj,kk,cc);
    vv[4]=PotVal(ii,jj-1,kk,cc);
    vv[5]=PotVal(ii+1,jj-1,kk,cc);
    for (ll=0; ll<6; ll++)
    { if ((vv[ll]>=30000)&&(vv[(ll+2)%6]>=30000))
    { if (vv[(ll+1)%6]<0) ddb=+32;
    else vv[(ll+1)%6]+=128; //512;
    }
    }
    for (ll=0; ll<6; ll++)
    { if ((vv[ll]>=30000)&&(vv[(ll+3)%6]>=30000))
    { ddb+=30;
    }
    }
    mm=30000;
    for (ll=0; ll<6; ll++)
    { if (vv[ll]<0)
    { vv[ll]+=30000;
        tt[ll]=10;
    }
    else tt[ll]=1;
        if (mm>vv[ll]) mm=vv[ll];
    }
    nn=0;
    for (ll=0; ll<6; ll++)
    { if (vv[ll]==mm) nn+=tt[ll];
    }
    if (llevel>1)
    { Bridge[ii][jj][kk]=nn/5;
        if ((nn>=2)&&(nn<10)) { Bridge[ii][jj][kk]=bb+nn-2; mm-=32; }
        if (nn<2)
        { oo=30000;
            for (ll=0; ll<6; ll++)
            { if ((vv[ll]>mm)&&(oo>vv[ll])) oo=vv[ll];
            }
            if (oo<=mm+104) { Bridge[ii][jj][kk]=bb-(oo-mm)/4; mm-=64; }
            mm+=oo;
            mm/=2;
        }
    }

    if ((ii>0)&&(ii<Size-1)&&(jj>0)&&(jj<Size-1)) Bridge[ii][jj][kk]+=ddb;
    else Bridge[ii][jj][kk]-=2;
    if (((ii==0)||(ii==Size-1))&&((jj==0)||(jj==Size-1))) Bridge[ii][jj][kk]/=2; // /=4
    if (Bridge[ii][jj][kk]>68) Bridge[ii][jj][kk]=68; //66

    if (Fld[ii][jj]==cc)
    { if (mm<Pot[ii][jj][kk])
    { Pot[ii][jj][kk]=mm;
        SetUpd(ii+1,jj,cc);
        SetUpd(ii,jj+1,cc);
        SetUpd(ii-1,jj+1,cc);
        SetUpd(ii-1,jj,cc);
        SetUpd(ii,jj-1,cc);
        SetUpd(ii+1,jj-1,cc);
        return(1);
    }
        return(0);
    }
    if (mm+dd<Pot[ii][jj][kk])
    { Pot[ii][jj][kk]=mm+dd;
        SetUpd(ii+1,jj,cc);
        SetUpd(ii,jj+1,cc);
        SetUpd(ii-1,jj+1,cc);
        SetUpd(ii-1,jj,cc);
        SetUpd(ii,jj-1,cc);
        SetUpd(ii+1,jj-1,cc);
        return(1);
    }
    return(0);
}

function PotVal(ii,jj,kk,cc)
{ if (ii<0) return(30000);
    if (jj<0) return(30000);
    if (ii>=Size) return(30000);
    if (jj>=Size) return(30000);
    if (Fld[ii][jj]==0) return(Pot[ii][jj][kk]);
    if (Fld[ii][jj]==-cc) return(30000);
    return(Pot[ii][jj][kk]-30000);
}

function SetUpd(ii,jj,cc)
{ if (ii<0) return;
    if (jj<0) return;
    if (ii>=Size) return;
    if (jj>=Size) return;
    Upd[ii][jj]=true;
}

function Clicked(ii, jj)
{
    if (IsOver)
        return;
    if (IsRunning)
    {
        LastEvent="Clicked("+ii+","+jj+")";
        return;
    }
    if (Fld[ii][jj]!=0)
    {
        /*if ((MoveCount==1)&&(window.document.OptionsForm.Swap.checked))
            MakeMove(ii,jj,false);*/
        return;
    }
    if (! IsPlayer[(MoveCount+Start0+1)%2])
        return;

    MakeMove(ii, jj, true);

}



function Resize()
{ if(navigator.appName == "Netscape") history.go(0);
}



function drawHexagon(c, x, y, r)
{
    c.beginPath();
    c.moveTo(x, y-r);
    for(var i=0; i<6; i++)
        c.lineTo(x+r*Math.cos(Math.PI*(1.5+1/3*i)), y+r*Math.sin(Math.PI*(1.5+1/3*i)));
    c.closePath();
    c.fill();
    c.stroke();
}

function getSel(e)
{
    //get the color where the mouse clicked
    var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width;

    let color = ctx.getImageData((e.clientX- rect.left)*scaleX, e.clientY, 1, 1).data;
    color[0] -= color[2]==38||color[2]==178 ? 241 : 0;
    color[1] -= color[2]==178 ? 220 : (color[2]==38 ? 0 : 140);
    if(color[0] >= 0  &&  color[0] <= 13  &&  color[1] >= 0  &&  color[1] <= 13  &&  (color[2] == 38  ||  color[2] == 171  ||  color[2] == 178))
        sel = [color[0], color[1]];
    else
        sel = [-1, -1];
}

function draw()
{
    ctx.clearRect(0, 0, 850, 600);
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(255,0,39)";
    ctx.beginPath();
    ctx.moveTo(w*15.65, r);
    ctx.lineTo(w*23.5, 24.5*r);
    ctx.lineTo(0, r);
    ctx.lineTo(w*7.85, 24.5*r);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgb(0,154,172)";
    ctx.beginPath();
    ctx.moveTo(0, r);
    ctx.lineTo(w*15.65, r);
    ctx.lineTo(w*7.85, 24.5*r);
    ctx.lineTo(w*23.5, 24.5*r);
    ctx.closePath();
    ctx.fill();

    var num = 0;
    ctx.strokeStyle = "white";
    for(var y=0; y<14; y++)
    {
        for(var x=0; x<14; x++)
        {
            if(Fld[x][y] == -1)
                ctx.fillStyle = "rgb(255,0,39)";
            else if(Fld[x][y] == 1)
                ctx.fillStyle = "rgb(0,154,172)";
            else if(x == sel[0]  &&  y == sel[1])
                ctx.fillStyle = "rgb(" + (x+(player==0?241:0)) + "," + (y+(player==0?0:140)) + "," + (player==0?38:171) + ")";
            else
                ctx.fillStyle = "rgb(" + (x+241) + "," + (y+220) + ",178)";
            drawHexagon(ctx, (x+y)*w - (y-4)*(w/2), (y+2)*1.5*r, r);
            num++;
        }
    }
}

function mouseMove(e)
{
    getSel(e);
    if(active)
        draw();
}



function mouseDown(e)
{
    var txt;
    if(MoveCount ==12)
    {
        var person = prompt("How well do know your opponent strategy?", "Please give a number between 1-10");

    }
    getSel(e);
    Clicked(sel[0],sel[1]);

}

// initialize the board to be empty
function initCanvas() {
    canvas = document.getElementById("output");
    ctx = canvas.getContext("2d");
    for(let i=0; i<14; i++)
    {
        board[i] = new Array(14);
        for(let j=0; j<14; j++)
            board[i][j] = -1;
    }
    ctx.clearRect(0, 0, 850, 500);
    ctx.lineWidth = 1;

    ctx.fillStyle = "rgb(255,0,39)";
    ctx.beginPath();
    ctx.moveTo(w*15.65, r);
    ctx.lineTo(w*23.5, 24.5*r);
    ctx.lineTo(0, r);
    ctx.lineTo(w*7.85, 24.5*r);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle =  "rgb(0,154,172)";
    ctx.beginPath();
    ctx.moveTo(0, r);
    ctx.lineTo(w*15.65, r);
    ctx.lineTo(w*7.85, 24.5*r);
    ctx.lineTo(w*23.5, 24.5*r);
    ctx.closePath();
    ctx.fill();

    var num = 0;
    ctx.strokeStyle = "white";
    for(var y=0; y<14; y++)
    {
        for(var x=0; x<14; x++)
        {
            if(board[x][y] == 0)
                ctx.fillStyle = "rgb(255,0,39)";
            else if(board[x][y] == 1)
                ctx.fillStyle = "rgb(0,154,172)";
            else if(x == sel[0]  &&  y == sel[1])
                ctx.fillStyle = "rgb(" + (x+(player==0?241:0)) + "," + (y+(player==0?0:140)) + "," + (player==0?38:171) + ")";
            else
                ctx.fillStyle = "rgb(" + (x+241) + "," + (y+220) + ",178)";
            drawHexagon(ctx, (x+y)*w - (y-4)*(w/2), (y+2)*1.5*r, r);
            num++;
        }
    }

    canvas.onmousemove = mouseMove;
    canvas.onmousedown = mouseDown;

}

