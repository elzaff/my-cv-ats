/* ATS CV — print to PDF via the browser's native print dialog.
           Choose "Save as PDF" as the destination. CSS @page handles A4 sizing. */

        document.getElementById('download-pdf').addEventListener('click', function () {
            window.print();
        });
