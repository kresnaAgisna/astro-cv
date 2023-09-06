const Spiral = () => {
  return (
    <div className="w-[4cm] h-[4cm] absolute top-0 right-0 overflow-x-clip">
      <div className="flex items-center justify-center w-[6cm] h-[6cm] rounded-full bg-white absolute -right-[2cm] -top-[3cm] opacity-60">
        <div className="flex items-center justify-center w-[5.8cm] h-[5.8cm] rounded-full bg-purple-900">
          <div className="flex items-center justify-center w-[4.8cm] h-[4.8cm] rounded-full bg-white absolute">
            <div className="flex items-center justify-center w-[4.6cm] h-[4.6cm] rounded-full bg-purple-900">
              <div className="flex items-center justify-center w-[3.6cm] h-[3.6cm] rounded-full bg-white absolute">
                <div className="flex items-center justify-center w-[3.4cm] h-[3.4cm] rounded-full bg-purple-900">
                  <div className="flex items-center justify-center w-[2.4cm] h-[2.4cm] rounded-full bg-white absolute">
                    <div className="flex items-center justify-center w-[2.2cm] h-[2.2cm] rounded-full bg-purple-900">
                      <div className="flex items-center justify-center w-[1.2cm] h-[1.2cm] rounded-full bg-white absolute">
                        <div className="flex items-center justify-center w-[1cm] h-[1cm] rounded-full bg-purple-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiral;
