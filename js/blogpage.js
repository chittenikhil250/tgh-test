const api_key = 'AIzaSyDA2EpnBDQcNehCydte_UqPLhZO0bGC9lk'
const apilink = '?key='+api_key
const url = 'https://www.googleapis.com/blogger/v3/blogs/6246307111365338254/posts?key=AIzaSyDA2EpnBDQcNehCydte_UqPLhZO0bGC9lk';
fetch(url)
.then( (res) => {return res.json()})
.then((result) => {
    var arr = result.items;
    n = arr.length;
	var i = 0;
    for(i ; i < n; i++){
        var data = `
        <div class="blog-post">
						<center>
                        <h1 class="title"><a target="_blank" href="${arr[i].url}">${arr[i].title}</a></h1>
						<ul class="post-meta">
							<li>
								<a href="#">${arr[i].published.substr(0,10)}</a>
							</li>
							<li>
								<a href="#">Honey</a>
							</li>
							<li>
								<a id="comments-anchor" target="_blank" href="${arr[i].url+'#comments'}">${arr[i].replies.totalItems} comments</a>
							</li>
						</ul>
                        </center>
						<p>${arr[i].content}</p> 
						<ul class="share-post">
							<li><button onclick="like()" id="like" class="like"><i class="fa fa-heart"></i></button></li>
							<li><a class="comment" href="${arr[i].url+'#comments'}" target="_blank"><i class="fa fa-comment"></i></a></li>	
							<li><a class="share" id="${'share '+i}" data-clipboard-text="${arr[i].url}"><i class="fa fa-share"><input type="button" style="display : none; cursor : pointer;" id="copy" data-clipboard-target="#txt_copy" >
							</i></a></li>
						</ul>
		</div>
        `
        document.getElementById('root').innerHTML += data;
		
    }
})
.catch(err => console.warn(err))