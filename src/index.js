const gmail =(value) => {
    const regex = new RegExp("[A-Za-z0-9\\._%\\-]+@gmail.com")

    return regex.test(value);
}

const hotmail = (value) => {
    const regex = new RegExp("[A-Za-z0-9\\._%+\\-]+@hotmail.com")

    return regex.test(value);
}

const mail = (value) => {
    const regex = new RegExp("[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}")

    return regex.test(value);
}

const outlook = (value) => {
    const regex = new RegExp("[A-Za-z0-9\\._%\\-]+@outlook.com")

    return regex.test(value);
}

const yahoo = (value) => {
    const regex = new RegExp("[A-Za-z0-9\\._%+\\-]+@yahoo.com")

    return regex.test(value);
}

export {gmail, hotmail, mail,outlook, yahoo}