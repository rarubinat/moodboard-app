import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterItems',
  standalone: true,
  pure: true
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: any[], status: string, type: string): any[] {
    if (!items) return [];
    return items.filter(item => {
      const statusMatch = status ? item.status === status : true;
      const typeMatch = type ? item.type === type : true;
      return statusMatch && typeMatch;
    });
  }
}
