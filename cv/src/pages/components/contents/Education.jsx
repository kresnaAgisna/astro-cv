const Education = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-[0.5cm]">EDUCATION</h3>
            <div className="flex flex-col space-y-5">
                <div>
                    <p className="text-lg font-semibold">Hacktiv8 Fullstack Javascript</p>
                    <p className="text-sm opacity-60">Apr 2023 - Aug 2023 | FSJS | 97.2 / 100</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">Universitas Esa Unggul</p>
                    <p className="text-sm opacity-60">2020 - 2023 | Psychology | 3.65 / 4.00</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">SMAN 3 Kab.Tangerang</p>
                    <p className="text-sm opacity-60">2014 - 2016 | Science | 88 / 100</p>
                </div>
            </div>
        </div>
    )
}

export default Education