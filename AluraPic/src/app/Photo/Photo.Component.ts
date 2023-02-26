import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'Photo.Component.html'
})
export class PhotoComponent 
{
    @Input() description = 'Gestão Comercial';
    @Input() url = 'https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg';
}