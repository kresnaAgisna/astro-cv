const BulletGroup = ({position}) => {
  
    return(
        <div className={`flex flex-col justify-center items-center w-[2cm] text-white text-xl opacity-60 absolute ${position}`}>
            <div>O</div>
            <div>O</div>
            <div>O</div>
        </div>
    )
}

export default BulletGroup