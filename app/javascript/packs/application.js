
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

require("semantic-ui-sass")


$(document).on('turbolinks:load', function(){
    $('.ui.dropdown').dropdown();
})
