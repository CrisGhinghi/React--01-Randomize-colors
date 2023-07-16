export const RandomizeColors = () => {

    let body = document.querySelector('body')

    function handleClick(e) {
        console.log(e.target)
        console.log(getRandomColor())
        body.style.background = getRandomColor()
        e.target.style.backgroundColor = getRandomColor()
    }

    function resetColors() {
        body.style.background = "#ffffff"
        let buttons = document.querySelectorAll('button')
        buttons[0].style.backgroundColor = '#3b82f6'
        buttons[1].style.backgroundColor = '#ef4444'
        buttons[2].style.backgroundColor = '#10b981'
        buttons[3].style.backgroundColor = '#8b5cf6'
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    return (
        <div>
            <h1 className="mb-4 font-bold text-#0f172a">Randomize Colors</h1>
            <button onClick={handleClick} className="m-2 shadow-md text-white bg-blue-500">Click me</button>
            <button onClick={handleClick} className="m-2 shadow-md text-white bg-red-500">Click me</button>
            <button onClick={handleClick} className="m-2 shadow-md text-white bg-green-500">Click me</button>
            <button onClick={handleClick} className="m-2 shadow-md text-white bg-purple-500">Click me</button>
            <hr className="mt-10" />
            <button onClick={resetColors} className="m-2 shadow-md bg-slate-200">Reset</button>
        </div>
    )
}