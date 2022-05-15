	//Load new logo image
    function showPreview(element: HTMLInputElement){
        // this is a file element
        const files = element.files!;
        if(files.length > 0){
            const src = URL.createObjectURL(files[0]);
            const preview = document.getElementById("logo-file-preview")! as HTMLImageElement;
            document.getElementById("file-preview")!.classList.remove("no-image");
            preview.src = src;
            preview.style.display = "block";
        }
    }