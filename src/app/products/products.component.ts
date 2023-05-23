import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  filteredProducts: any[] = [];

  productStartus: any[] = [
    { value: 'all', type: 'All' },
    { value: 'active', type: 'Active' },
    { value: 'inactive', type: 'Inactive' },
  ];

  productStock: any[] = [
    { value: 'all', type: 'All' },
    { value: 'instock', type: 'InStock' },
    { value: 'outofstock', type: 'Out of Stock' },
  ];
  selectedStatus: string = '';
  selectedStock: string = '';

  productList = [
    {
      title: "Product 1",
      description: "This is the description for Product 1.",
      // image: "https://example.com/product1.jpg",
      status: "Active",
      availability: "InStock",
      price: 19.99
    },
    {
      title: "Product 2",
      description: "This is the description for Product 2.",
      // image: "https://example.com/product2.jpg",
      status: "Active",
      availability: "OutofStock",
      price: 29.99
    },
    {
      title: "Product 3",
      description: "This is the description for Product 3.",
      // image: "https://example.com/product3.jpg",
      status: "InActive",
      availability: "InStock",
      price: 9.99
    },
    {
      title: "Product 4",
      description: "This is the description for Product 4.",
      // image: "https://example.com/product4.jpg",
      status: "Active",
      availability: "InStock",
      price: 39.99
    },
    {
      title: "Product 5",
      description: "This is the description for Product 5.",
      // image: "https://example.com/product5.jpg",
      status: "InActive",
      availability: "OutofStock",
      price: 14.99
    },
    {
      title: "Product 6",
      description: "This is the description for Product 6.",
      // image: "https://example.com/product6.jpg",
      status: "Active",
      availability: "InStock",
      price: 24.99
    },
    {
      title: "Product 7",
      description: "This is the description for Product 7.",
      // image: "https://example.com/product7.jpg",
      status: "Active",
      availability: "OutofStock",
      price: 19.99
    },
    {
      title: "Product 8",
      description: "This is the description for Product 8.",
      // image: "https://example.com/product8.jpg",
      status: "InActive",
      availability: "InStock",
      price: 34.99
    },
    {
      title: "Product 9",
      description: "This is the description for Product 9.",
      // image: "https://example.com/product9.jpg",
      status: "Active",
      availability: "InStock",
      price: 15.99
    },
    {
      title: "Product 10",
      description: "This is the description for Product 10.",
      // image: "https://example.com/product10.jpg",
      status: "Active",
      availability: "OutofStock",
      price: 49.99
    },
    {
      title: "Product 11",
      description: "This is the description for Product 11.",
      // image: "https://example.com/product11.jpg",
      status: "Active",
      availability: "InStock",
      price: 9.99
    },
    {
      title: "Product 12",
      description: "This is the description for Product 12.",
      // image: "https://example.com/product12.jpg",
      status: "Active",
      availability: "InStock",
      price: 29.99
    },

    {
      title: "Product 13",
      description: "This is the description for Product 13.",
      // image: "https://example.com/product13.jpg",
      status: "InActive",
      availability: "OutofStock",
      price: 14.99
    },

    {
      title: "Product 14",
      description: "This is the description for Product 14.",
      // image: "https://example.com/product14.jpg",
      status: "Active",
      availability: "InStock",
      price: 19.99
    },
    {
      title: "Product 15",
      description: "This is the description for Product 15.",
      image: "https://example.com/product15.jpg",
      status: "Active",
      availability: "InStock",
      price: 39.99
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedStatus = params['status'] || 'all';
      this.selectedStock = params['stock'] || 'all';
      this.filterProducts();
    });
  }

  onStatusSelectionChange(event: any) {
    this.selectedStatus = event.value;
    this.updateQueryParams();
    // console.log(this.selectedStatus);
  }

  onStockSelectionChange(event: any) {
    this.selectedStock = event.value;
    this.updateQueryParams();
    // console.log(this.selectedStock);
  }

  updateQueryParams() {
    const queryParams = {
      status: this.selectedStatus,
      ...(this.selectedStock !== 'all' && { stock: this.selectedStock })
    };
    
    // TODO: find answer on how to add new property to object conditionally
    // learn array object from javascript.info
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

  filterProducts() {
    this.filteredProducts = this.productList.filter(product => {
      // TODO: fix it to have only condition which is 2nd one
      const stockMatch = (this.selectedStatus === 'all' || product.status.toLowerCase() === this.selectedStatus) &&
      (this.selectedStock === 'all' || product.availability.toLowerCase() === this.selectedStock);
      return stockMatch;
    });

    // console.log("filteredProducts", this.filteredProducts);
  }
}