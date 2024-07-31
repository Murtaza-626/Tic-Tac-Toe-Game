let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset")
let turnO = true
const winPatterns = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "X"
            turnO = false
        }

        else {
            box.innerText = "O"
            turnO = true
        }
        box.disabled = true
        checkWinner()

    })
})

let win = document.querySelector(".winner")

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText
        let val2 = boxes[pattern[1]].innerText
        let val3 = boxes[pattern[2]].innerText
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                win.innerText = "Winner:" + " " + val1;
                return
            }
        }
    }

}

resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        console.clear()
        box.innerText = ""
        box.disabled = false
        win.innerText = "";
    })
})
