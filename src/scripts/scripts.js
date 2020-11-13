function TabNavigation () {
  const html = {
    links: [...document.querySelector('.tabs').children],
    contents: [...document.querySelector('.content').children],
    openTab: document.querySelector('[data-open]')
  }
  
  function hideAllTabContent (){
    html.contents.forEach(section => {
      section.style.display = 'none'
    })
  }
  function removeAllActiveClass (){
    html.links.forEach(tab => {
      tab.className = tab.className.replace(' active', '')
    })
  }

  function showCurrentTab (id){
    const tabContent = document.querySelector('#' + id)
    tabContent.style.display = 'flex'
  }

  function selectTab(event) {
    hideAllTabContent()
    removeAllActiveClass()

    const target = event.currentTarget
    showCurrentTab(target.dataset.id)

    target.className += ' active'
  }

  function listenForChange (){
    html.links.forEach(tab => {
      tab.addEventListener('click',selectTab)
    })
  }
  
  function init () {
    hideAllTabContent()
    listenForChange()

    html.openTab.click()
  }
  
  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation()
  tabNavigation.init()
})