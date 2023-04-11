import React from 'react'

const ItemContainer = () => {
  return (
    <div>
        <h2>Itam - </h2>
    </div>
  )
}



const mapStateToProps = (state, ownProps)=>{
    return{
        numOfCake: state.cake.numOfCake
    }
}


export default ItemContainer