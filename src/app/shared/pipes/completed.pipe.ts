import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'completed'
})
export class CompletedPipe implements PipeTransform{
    transform(completed: boolean):string{
      
        return (completed) ? 'Si' : 'No';
    }
}