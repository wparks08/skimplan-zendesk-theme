const buttonActiveClass = "active";
const buttonContainerClass = "blocks-item";
const hideCategoryDivClass = "hidden";
const categoryDivClass = "category-div";

const showSection = (id) => {
    removeActiveClassFromAllButtons();
    addHiddenClassToAllCategoryDivs();

    const button = document.getElementById(`btn-${id}`);
    const categoryDiv = document.getElementById(`category-${id}`);
    const li = button.parentElement;

    toggleClass(li, buttonActiveClass);
    toggleClass(categoryDiv, hideCategoryDivClass);
}

const removeActiveClassFromAllButtons = () => {
    const blocksItems = document.getElementsByClassName(buttonContainerClass);
    Array.prototype.forEach.call(blocksItems, (element) => removeClass(element, buttonActiveClass))
}

const addHiddenClassToAllCategoryDivs = () => {
    const categoryDivs = document.getElementsByClassName(categoryDivClass);
    Array.prototype.forEach.call(categoryDivs, (element) => addClass(element, hideCategoryDivClass));
}

const toggleClass = (element, className) => {
    const classArr = element.className.split(" ");
    if (classArr.includes(className)) {
        removeClass(element, className);
    } else {
        addClass(element, className);
    }
}

const removeClass = (element, className) => {
    const classArr = getClassArr(element);
    element.className = classArr.filter(cl => cl !== className).join(" ");
}

const addClass = (element, className) => {
    const classArr = getClassArr(element);
    if (!classArr.includes(className)) {
        classArr.push(className);
    }
    element.className = classArr.join(" ");
}

const getClassArr = (element) => {
    return element.className.split(" ");
}