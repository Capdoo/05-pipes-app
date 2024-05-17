import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'miToggleCase'
})
export class ToggleCasePipe implements PipeTransform {

    transform(value: string, toUpper: boolean = false) {
        console.log({ value, toUpper });
        return (toUpper) ? value.toUpperCase() : value.toLowerCase();
    }

}