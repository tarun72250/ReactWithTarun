function PropsFunComp(ps) {
  return (
    <>
      <h1>Weclome</h1>
      <ol>
        {ps.names.map((name, index) => {
          return <li key={index}> {name} </li>;
        })}
      </ol>
      <ol>
        {ps.age.map((v) => {
          return <li key={v}> {v}</li>;
        })}
      </ol>
    </>
  );
}


PropsFunComp.defaultProps={
    names : ["Sumit","Yash","Abhi"] ,
    age : [22,33,44]
}


export default PropsFunComp;
