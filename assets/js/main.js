const main = {
	init() {
		$('#click-menu').click(function() {
			console.log('click search');
			$('#login-menu').toggleClass("is-show");
			$('body').toggleClass("overflow");
			$('#click-menu').toggleClass("is-close");
			$('#nav').toggleClass("el-menu--horizontal");
		})

		$('#search-close').hide();

		$('#search').click(function() {
			console.log('click search');
			$('#search-close, #search-input').show();
			$('#search, #logo').hide();
		})
		
		$('#search-close').click(function() {
			console.log('click search-close');
			$('#search-close, #search-input').hide();
			$('#search, #logo').show();
		})
	}
}
export default main;