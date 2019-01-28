import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'supplierformat' })

export class SupplierFieldProductListPipe implements PipeTransform {

    transform(supplierData: any): string {
        return supplierData.supplierName + '-' + supplierData.supplierId;
    }
} 