import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-input-signature',
  templateUrl: './input-signature.component.html',
  styleUrls: ['./input-signature.component.css']
})
export class InputSignatureComponent implements AfterViewInit {
  @ViewChild('signatureCanvas', { static: true }) signatureCanvas!: ElementRef;
  private ctx: CanvasRenderingContext2D | undefined;
  private drawing: boolean = false;

  ngAfterViewInit() {
    this.ctx = this.signatureCanvas.nativeElement.getContext('2d');
    this.ctx!!.lineWidth = 2;
  }

  startDrawing(event: MouseEvent) {
    this.drawing = true;
    this.ctx!!.beginPath();
    this.ctx!!.moveTo(event.clientX - this.signatureCanvas.nativeElement.offsetLeft, event.clientY - this.signatureCanvas.nativeElement.offsetTop);
  }

  draw(event: MouseEvent) {
    if (!this.drawing) return;
    this.ctx!!.lineTo(event.clientX - this.signatureCanvas.nativeElement.offsetLeft, event.clientY - this.signatureCanvas.nativeElement.offsetTop);
    this.ctx!!.stroke();
  }

  endDrawing() {
    this.drawing = false;
  }

  clearSignature() {
    this.ctx!!.clearRect(0, 0, this.signatureCanvas.nativeElement.width, this.signatureCanvas.nativeElement.height);
  }

  saveSignature() {
    if (this.ctx) {
      // Get the canvas data as a data URL (JPEG image)
      const imageDataUrl = this.signatureCanvas.nativeElement.toDataURL('image/jpg');
      console.log(imageDataUrl);

      // Create an anchor element for downloading the image
      const downloadLink = document.createElement('a');
      downloadLink.href = imageDataUrl;
      downloadLink.download = 'signature.jpg';
      downloadLink.style.display = 'none';

      // Add the link to the document and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Remove the link from the document
      document.body.removeChild(downloadLink);
    }
  }
}
