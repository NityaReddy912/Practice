import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_datagrid/datagrid.dart';
// import 'package:zendq/widgets/sales_home_page.dart';
import '../../screens/OpportunityDetailsScreen.dart';
// import '../../screens/opportunityDetails.dart';

class CustomTableSales extends StatefulWidget {
  const CustomTableSales({Key? key}) : super(key: key);

  @override
  State<CustomTableSales> createState() => _CustomTableSalesState();
}

class _CustomTableSalesState extends State<CustomTableSales> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SfDataGrid(
        // allowSorting: true,

        // allowFiltering: true,

        selectionMode: SelectionMode.multiple,

        source: DealDataSource(getDealData(), context),

        columns: [
          GridColumn(
            width: 100,
            columnName: 'accountName',
            label: Container(
              decoration: BoxDecoration(
                color: Colors.green[200],
              ),
              alignment: Alignment.center,
              child: const Text('Account Name'),
            ),
          ),

          GridColumn(
            width: 110,
            columnName: 'opportunityName',
            label: Container(
              decoration: BoxDecoration(
                color: Colors.green[200],
              ),
              alignment: Alignment.center,
              child: const Text('Account Name'),
            ),
          ),

          GridColumn(
              width: 100,
              columnName: 'status',
              label: Container(
                  decoration: BoxDecoration(
                    color: Colors.green[200],
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    'Status',
                  ))),

          GridColumn(
              columnName: 'salesInputs',
              label: Container(
                  decoration: BoxDecoration(
                    color: Colors.green[200],
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    'Sales Inputs',
                  ))),

          GridColumn(
              width: 100,
              columnName: 'doInputs',
              label: Container(
                  decoration: BoxDecoration(
                    color: Colors.green[200],
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    'DO Inputs',
                  ))),

          GridColumn(
              width: 110,
              columnName: 'submissionDate',
              label: Container(
                  decoration: BoxDecoration(
                    color: Colors.green[200],
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    'Submission Date',
                  ))),

          GridColumn(
              columnName: 'tcv',
              label: Container(
                  decoration: BoxDecoration(
                    color: Colors.green[200],
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    'TCV',
                  ))),

          GridColumn(
              columnName: 'menu',
              label: Container(
                  decoration: BoxDecoration(
                    color: Colors.green[200],
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    '',
                  ))),

          // Other columns with their labels go here

          // Add more GridColumn widgets as per your requirement
        ],
      ),
    );
  }

  List<DealStatus> getDealData() {
    return [
      DealStatus("abc", "opportunityName", "Pending", "salesInputs", "doInputs",
          "submissionDate", "tcv", const Text("::")),
      DealStatus("def", "opportunityName", "Completed", "salesInputs",
          "doInputs", "submissionDate", "tcv", const Text("::")),
    ];
  }
}

class DealDataSource extends DataGridSource {
  final BuildContext context;

  DealDataSource(List<DealStatus> deal, this.context) {
    dataGridRows = deal
        .map<DataGridRow>((dataGridRow) => DataGridRow(cells: [
              DataGridCell<String>(
                  columnName: 'accountName', value: dataGridRow.accountName),
              DataGridCell<String>(
                  columnName: 'opportunityName',
                  value: dataGridRow.opportunityName),
              DataGridCell<String>(
                  columnName: 'status', value: dataGridRow.status),
              DataGridCell<String>(
                  columnName: 'salesInputs', value: dataGridRow.salesInputs),
              DataGridCell<String>(
                  columnName: 'doInputs', value: dataGridRow.doInputs),
              DataGridCell<String>(
                  columnName: 'submissionDate',
                  value: dataGridRow.submissionDate),
              DataGridCell<String>(columnName: 'tcv', value: dataGridRow.tcv),
              DataGridCell<Widget>(columnName: 'menu', value: dataGridRow.menu),
            ]))
        .toList();
  }

  late List<DataGridRow> dataGridRows;

  @override
  List<DataGridRow> get rows => dataGridRows;

  @override
  DataGridRowAdapter? buildRow(DataGridRow row) {
    return DataGridRowAdapter(
      cells: row.getCells().map<Widget>((dataGridCell) {
        return GestureDetector(
          onTap: () {
            // Extract the data from the row

            String accountName = row
                .getCells()
                .firstWhere((cell) => cell.columnName == 'accountName')
                .value
                .toString();

            String opportunityName = row
                .getCells()
                .firstWhere((cell) => cell.columnName == 'opportunityName')
                .value
                .toString();

            String status = row
                .getCells()
                .firstWhere((cell) => cell.columnName == 'status')
                .value
                .toString();

            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) =>  OpportunityDetailsScreen(),
              ),
            );
          },
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Text(
              dataGridCell.value.toString(),
            ),
          ),
        );
      }).toList(),
    );
  }
}

class DealStatus {
  DealStatus(
      this.accountName,
      this.opportunityName,
      this.status,
      this.salesInputs,
      this.doInputs,
      this.submissionDate,
      this.tcv,
      this.menu);

  final String accountName;

  final String opportunityName;

  final String status;

  final String salesInputs;

  final String doInputs;

  final String submissionDate;

  final String tcv;

  final Widget menu;
}
