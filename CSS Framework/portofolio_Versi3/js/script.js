// event pada saat link di klik
$('.page-scroll').on('click', function(){
	//ambil isi href
	var tujuan=$(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 125, 'swing');
	e.preventDefaul();
});