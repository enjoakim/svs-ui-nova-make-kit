import { forwardRef, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: 'default' | 'striped';
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ variant = 'default', className, ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={clsx(
          'w-full caption-bottom',
          'font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px]',
          variant === 'striped' && '[&_tbody_tr:nth-child(even)]:bg-muted/50',
          className
        )}
        {...props}
      />
    </div>
  )
);

Table.displayName = 'Table';

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={clsx('border-b border-border', className)} {...props} />
  )
);

TableHeader.displayName = 'TableHeader';

export const TableBody = forwardRef<HTMLTableSectionElement, TableHTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={clsx('[&_tr:last-child]:border-0', className)} {...props} />
  )
);

TableBody.displayName = 'TableBody';

export const TableRow = forwardRef<HTMLTableRowElement, TableHTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={clsx('border-b border-border transition-colors hover:bg-muted/50', className)}
      {...props}
    />
  )
);

TableRow.displayName = 'TableRow';

export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={clsx(
        'h-12 px-4 text-left align-middle',
        ' text-muted-foreground',
        '[&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
);

TableHead.displayName = 'TableHead';

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={clsx('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
);

TableCell.displayName = 'TableCell';
