
function Cirles(props) {

 let {xCoor,yCoor} = props;

  return (
    <div style={{ left:`${xCoor}px`,
        top: `${yCoor}px`}} className="circle1"> 
    </div>
  );
}

export default Cirles;