import React from 'react'

const GlobalData = () => {
    const [userData, setuserData] = useState({userName:"", userEmail:"",userPhone:"",address : [{lane: ""}, {city:""},{state: ""},{pin:""}],userPassword:""})


    const handleSubmit = (e) =>{
        e.priventDefault();
    }

  return (
    <div>GlobalData</div>
  )
}

export default GlobalData