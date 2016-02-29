$(document).ready(function() {
    console.log('test done');

    $('.project-file').on('change', function() {
        console.log('poject file change is active');

        var $this = $(this),
            file_name = $this.val();

        console.log($this.val());

	    // if (!/(\.bmp|\.gif|\.jpg|\.jpeg|\.png)$/i.test(file_name)) {
	    //     alert('Вы пытаетесь загрузить файл который не является картинкой!');
	    //     document.getElementById('image_p').value = '';
	    //     return false;
	    // }

        $('.popup-label-img-txt').text(file_name);
        // $('#id').val('hello');
        $('.project-file').trigger('hideToolTip');
        $('.popup-label-img').removeClass('error-field');
        // document.getElementById('id').value = 'xz';
    });
});