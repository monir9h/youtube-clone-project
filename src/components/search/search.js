import './search.css'

function Search(){
    return(
        <div className='search-bar'>
        <input id = "search-input" htmlFor="search" type="text" />
        <button id = "search-button" htmlFor="search">Search</button>
        </div>
    )
}

export default Search

/*
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>
		Embedding YouTube video in Bootstrap modal
	</title>
	
	<style>
		.bs-example {
			margin: 20px;
		}
		
		.modal-content iframe {
			margin: 0 auto;
			display: block;
		}
	</style>
	<script>
		$(document).ready(function() {
			var url = $("#Geeks3").attr('src');
			$("#Geeks2").on('hide.bs.modal', function() {
				$("#Geeks3").attr('src', '');
			});
			$("#Geeks2").on('show.bs.modal', function() {
				$("#Geeks3").attr('src', url);
			});
		});
	</script>
</head>

<body>
	<center>
		<h1 style="color:green">
		GeeksforGeeks
	</h1>

		<h3>
		How to embed YouTube video in Bootstrap modal?
	</h3>
		<div class="bs-example">
			<a href="#Geeks2"
			class="btn btn-lg btn-primary"
			data-toggle="modal">Launch Modal</a>

			<div id="Geeks2" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button"
									class="close"
									data-dismiss="modal"
									aria-hidden="true">×</button>
							<h4 class="modal-title">GeeksforGeeks</h4>
						</div>
						<div class="modal-body">
							<iframe id="Geeks3" width="450" height="350"
									src=
"https://www.youtube.com/embed/V5he1JXiQbg"
									frameborder="0" allowfullscreen>
							</iframe>
						</div>
					</div>
				</div>
		</div>
	</div>
	</center>
</body>

</html>
*/