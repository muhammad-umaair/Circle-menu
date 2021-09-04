var menu = CMenu("#menu1")
  .config({
    menus: [{
      title: "GitHub",
      icon: "fa fa-github",
      href: {
        url: "http://github.com",
        blank: true
      }
    }, {
      title: "GitLab",
      icon: ["fa fa-gitlab", '#4078c0'],
    }, {
      title: "subMenu",
      icon: "my-icon icon1",
      menus: [{
        title: 'subMenu1',
        icon: 'fa fa-firefox'
      }, {
        title: 'subMenu2',
        icon: 'fa fa-file'
      }]
    }, {
      title: "subMenu",
      icon: "my-icon icon2"
    }, {
      title: "click",
      icon: "my-icon icon3"
    }, {
      title: "hash-href",
      href: "#someHash"
    }, {
      title: "clickMe!",
      click: function() {
        alert('click event callback');
      }
    }, {
      disabled: true,
      title: "disabled"
    }]
  });



$(document).click(function() {
  menu.hide();
});
$(document).contextmenu(function(e) {
  menu.show([e.pageX, e.pageY]);
  return false;
});
