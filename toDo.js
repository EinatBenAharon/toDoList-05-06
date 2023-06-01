let list_ar = []; //יצירת מערך ריק

//פונקציה שבתוכה שתי פונקציות אנונימיות שמאזינות לכפתורים-הוספה ומחיקה
function createList() {
    const resetBtn = document.querySelector("#id_btn_reset");
    resetBtn.addEventListener("click", function () {
        list_ar = [];
        listPrint(list_ar);
    })
    const addBtn = document.querySelector("#id_btn");
    addBtn.addEventListener("click", function () {
        let userList = document.querySelector("#id_input").value;
        document.querySelector("#id_input").value = "";
        if (userList === '') {
            alert("You must write something!");
        } else {
            //הוספה למערך 
            list_ar.push(userList);
            //קריאה לפונקציה הבאה ויישום המערך כפרמטר
            listPrint(list_ar);
        }
    })
}
//פונקציה ליצירת תאים ברשימה
function listPrint(_ar) {
    //איפוס כדי למנוע כפילויות
    document.querySelector("#id_parent").innerHTML = "";
    //פונקציה לכל תא של הפרמטר- המערך 
    _ar.forEach(function (item) {
        //יצירת אלמנט מסוג ליסט 
        const checkList = document.createElement("li");
        //יצירת קלאס לעיצוב עם בוטסראפ
        checkList.className = "border p-2 list-unstyled";
        //הדפסת על תא שנוסף למערך בתוך הרשימה
        checkList.innerHTML = item;
        //פונקציה אנונימית שמאזינה ללחיצה על כל תא ברשימה ויוצרת קלאס חדש, שמקבל עיצוב קו חוצה 
        checkList.addEventListener("click", function () {
            this.classList.toggle("checked");
        });
        //יצירת אלמנט ספאן
        const span = document.createElement("SPAN");
        //יצירת טקסט מסוג סימן איקס
        const txt = document.createTextNode("\u00D7");
        //נתינת קלאס לספאן שאותו נעצב
        span.className = "close";
        //נשייך את האיקס לאבא שלו הספאן
        span.appendChild(txt);
        //נשייך את הליסט שהגדרנו לאיידי 
        document.querySelector("#id_parent").appendChild(checkList);
        //נשייך את הספאן לליסט שהאיקס כבר משוייך לתוכו 
        checkList.appendChild(span);
        //קריאה לקלאס שהוגדר בתוך הספאן ויצירת פונקציה שעוברת על כל תא במערך ומוחקת את התא בליסט בלחיצה על האיקז
        const deleteItem = document.getElementsByClassName("close");
        let i;
        for (i = 0; i < deleteItem.length; i++) {
            deleteItem[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    })
}
//קריאה לפונקציה
createList()
