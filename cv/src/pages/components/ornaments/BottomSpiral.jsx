const Spiral = () => {
  return (
    <div className="w-[8cm] h-[8cm] absolute bottom-0 right-[0.5cm] overflow-clip">
      <div className="flex items-center justify-center w-[8cm] h-[8cm] rounded-full bg-gradient-to-bl from-orange-500 via-amber-400 to-orange-300 absolute -right-[50%] -bottom-[55%]">
        <div className="flex items-center justify-center w-[7cm] h-[7cm] rounded-full border-white border-[0.5cm]">
          <div className="flex items-center justify-center w-[5cm] h-[5cm] rounded-full border-white border-[0.5cm]">
            <div className="flex items-center justify-center w-[3cm] h-[3cm] rounded-full border-white border-[0.5cm]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiral;
