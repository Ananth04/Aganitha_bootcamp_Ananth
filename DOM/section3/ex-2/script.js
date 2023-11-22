function showTab(tabNumber) {
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  
  var selectedTab = document.getElementById('tab' + tabNumber);
  selectedTab.classList.add('active');
}
  