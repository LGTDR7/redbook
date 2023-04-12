import Mock from 'mockjs'
const listdata=()=>{
    let leftdata=[];
    let rightdata=[];
    const Random = Mock.Random;
    for(let i=0;i<10;i++)
    {
        let imgurl='https://picsum.photos/'+Math.ceil((Math.random()+1)*180)+'/'+Math.ceil((Math.random()+0.6)*300);
        let likenum=Math.ceil(Math.random()*1000);
        let newdata={
            title: Random.csentence(10, 25),
            img:imgurl,
            like:likenum,
            author: Random.cname(),
        }
        if(i%2==0)
        {
            leftdata.push(newdata)
        }
        else
        rightdata.push(newdata)
    }
    return {leftdata,rightdata}
}
Mock.mock('/getData','get',listdata)