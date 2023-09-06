import { useEffect, useRef, useState } from "react";

const Certification = () => {
    const [pos, setPos] = useState(null)
    const [percentage, setPercentage] = useState(0)
    const [drag, setDrag] = useState(false)
    const carousel = useRef()

    const setClientX = (e) => {
      setPos(e.clientX)
      setDrag(true)
    }

    const toggleInactive = () => {
      setDrag(false)
    }

    const moveImage = (e) => {
      if(drag) {
        const distance = (parseFloat(pos) - e.clientX) / 50
        setPercentage(prev => prev + distance)
        if(percentage < 200) {
          carousel.current.style.transform = `translate(-${percentage}%, 0%)`
        }
      }
      if(percentage < 0) {
        setPercentage(0)
        setDrag(0)
      }

      if(percentage > 200) {
        setPercentage(200)
        setDrag(200)
      }
    }

    useEffect(() => {
      window.onmouseup = () => {
        setDrag(false)
      }
    }, [])

    return (
      <div className="z-10 w-full">
        <h3 className="text-2xl font-bold text-purple-900 mb-[0.5cm]">CERTIFICATIONS</h3>
        <div className="h-[5cm] w-full p-2 ring-purple-900 ring-1 overflow-clip cursor-pointer" onMouseDown={setClientX} onMouseMove={moveImage}>
            <div className="flex space-x-2 w-full h-full" ref={carousel} draggable="false">
              <img src="/Certificate-hacktiv8-1.png" alt="certificate.png" className="object-contain shadow rounded-lg" draggable="false"/>
              <img src="/IT-support.jpg" alt="certificate.png" className="object-fill shadow rounded-lg" draggable="false"/>
              <img src="/Google-Data.jpg" alt="certificate.png" className="object-contain shadow rounded-lg" draggable="false"/>
            </div>
        </div>
      </div>
    );
  };
  
  export default Certification;
  