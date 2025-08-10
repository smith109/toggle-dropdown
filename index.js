const toggleDropDown = (event) => {
  const dropDown = event.target.closest('.dropdown');
  const dropDownMenu = dropDown.querySelector('.dropdown-menu');

  dropDownMenu.classList.toggle('visible');
}

export default toggleDropDown;