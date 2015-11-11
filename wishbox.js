function getMetaValue(metaName, MetaType, $) {
    var v = $('meta['+MetaType+'="'+metaName+'"]').attr('content');
    return v;
}

var modal = '<div id="modal">Item saved on wishbox</div>';

jQuery(function($){
    item.image = getMetaValue('og:image', 'property', $);

    console.log(item);
});

