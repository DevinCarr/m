(() => {
    let m = document.getElementById("m"),
        _1 = document.getElementById("_1"),
        _2 = document.getElementById("_2"),
        _3 = document.getElementById("_3"),
        _4 = document.getElementById("_4"),
        b = document.getElementById("b"),
        i = document.getElementById("i"),
        t = document.getElementById("t"),
        c = "U2FsdGVkX18B6zREzudcUUIJXOG8CrI/ziEkMoBhEP93F579h6RfLiyefbcUFq+UsLNTBsu2hB2dS5dxQ+LjC74XCJRSxNJ4Lbai65UUOQosXmQ5LL7wCN4cKN+6Ewi2uP0t7FNy5Zj1M0kn7zVGiMNJcbmAv/pcyK+Wlsqy+oc6PXvT6Sn4l6m22+tP5brVK2tfoeNJrAjgZo2dzausN/la/3hwOsnjmn5msAq9LNARQt1k400zDg7TZCJJaFLjB0C9Y0uq6jki+Kc7gXByr0FKJ27tcIQtPqHJV8qHUwrTeoYRuNB0MhkgUFdyJcbWVu8JESQ2OXJp1wscLJUguUxkcpZfYxLFhHo/HXkWWegYyzRpGT1jY9VIsTif+64/6M8/QNc3aTYHJqXXRKSGvg=="

    let key = (a,b,c,d) => {
        let __1 = Number.parseInt(_1.value,10),
            __2 = Number.parseInt(_2.value,10),
            __3 = Number.parseInt(_3.value,10),
            __4 = Number.parseInt(_4.value,10)
            hash = ((Number.isNaN(__1) ? 0 : __1)
                + (Number.isNaN(__2) ? 0 : __2)
                + (Number.isNaN(__3) ? 0 : __3)
                + (Number.isNaN(__4) ? 0 : __4)),
            val = __1 === a && __2 === b && __3 === c && __4 === d
        return [hash,val]
    }

    let e = (t,k) => {
        return CryptoJS.AES.encrypt(t, k).toString()
    }

    let d = (c,k) => {
        let bytes = CryptoJS.AES.decrypt(c.toString(), k)
        return bytes.toString(CryptoJS.enc.Utf8)
    }

    let r = window.localStorage.getItem("m")
    if (r !== null) {
        let time = moment(r)
        if (moment().isBefore(time)) {
            i.classList.add("gone")
            t.innerHTML += moment(time).fromNow() + "."
        } else {
            window.localStorage.removeItem("m")
            i.classList.remove("gone")
            t.classList.add("gone")
        }
    } else {
        i.classList.remove("gone")
        t.classList.add("gone")
    }
    b.onclick = () => {
        let [h,v] = key(10,8,21,20)
        let k = h.toString() + "idy3764ghj765rfni4334ugcxe48087yhne3467875efghn"
        
        if (v) {
            let p = d(c,k)
            i.classList.add("gone")
            m.innerHTML = p
        } else {
            i.classList.add("gone")
            let next = moment().add(1, "h")
            window.localStorage.setItem("m",next.format())
            t.innerHTML += moment(next).fromNow() + "."
            t.classList.remove("gone")
        }
    }
})();
