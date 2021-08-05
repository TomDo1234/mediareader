

$(document).ready(function() {	
	length = 40; //Hard code here, not always 40 pages, 40 pages is max
	for (i = 1;i <= length;i++) {
		$("#pages").append("<option value=" + i + ">" + "Page " + i + "</option>"); 	
	}
	serieslength = 162; //Hard code here, not always 162 chapters
	for (i = 1;i <= serieslength;i++) {
		$("#chapters").append("<option value=" + i + ">" + "Chapter " + i + "</option>"); 	
	}
	
	let chapterroot = "sources/Monster/Monster_1/monster_1_";
	$("#theimage").attr("src", "sources/Monster/Monster_1/monster_1_1.jpg");
	
	$('#chapters').on('change', function() {
		$("#theimage").attr("src", "sources/Monster/Monster_" + this.value + "/monster_" + this.value + "_1.jpg");
		chapterroot = "sources/Monster/Monster_" + this.value + "/monster_" + this.value + "_";	
		$("#pages").val(1);	
	});
	
	$('#pages').on('change', function() {
		$("#theimage").attr("src", chapterroot + this.value + ".jpg");
	});
	
	
});

document.onkeydown = function(e) {
    switch(e.which) {
        case 37: // left
		if ($('#pages').val() != 1) {
			$('#pages').val(parseInt($('#pages').val()) - 1).change();	
		}
        break;

        case 39: // right
			$('#pages').val(parseInt($('#pages').val()) + 1).change();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};