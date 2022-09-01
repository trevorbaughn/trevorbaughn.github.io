function copyToClipboard(copyText){
    copyText.select();
    copyText.setSelectionRange(0,99999); //mobile

    navigator.clipboard.writeText(copyText.value);

    alert("Copied: " + copyText.value);

}