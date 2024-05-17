import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'miCanFly'
})
export class CanFlyPipe implements PipeTransform {

    transform(flagVuela: boolean) {
        return flagVuela ? "Vuela" : "No Vuela"
    }

}