// Mock data
const mockData = {
    trains: [
        {
            id: 1,
            name: "SE1",
            departureStation: "Hà Nội",
            arrivalStation: "TP. Hồ Chí Minh",
            departureTime: "2024-03-20T08:00:00",
            arrivalTime: "2024-03-21T08:00:00",
            duration: "24h 00m",
            price: 1200000,
            availableSeats: 45,
            type: "Tốc Hành"
        },
        {
            id: 2,
            name: "SE2",
            departureStation: "TP. Hồ Chí Minh",
            arrivalStation: "Hà Nội",
            departureTime: "2024-03-20T09:00:00",
            arrivalTime: "2024-03-21T09:00:00",
            duration: "24h 00m",
            price: 1200000,
            availableSeats: 30,
            type: "Tốc Hành"
        },
        {
            id: 3,
            name: "TN1",
            departureStation: "Hà Nội",
            arrivalStation: "Đà Nẵng",
            departureTime: "2024-03-20T10:00:00",
            arrivalTime: "2024-03-20T22:00:00",
            duration: "12h 00m",
            price: 800000,
            availableSeats: 60,
            type: "Địa Phương"
        },
        {
            id: 4,
            name: "SE3",
            departureStation: "Đà Nẵng",
            arrivalStation: "Hà Nội",
            departureTime: "2024-03-21T07:00:00",
            arrivalTime: "2024-03-21T19:00:00",
            duration: "12h 00m",
            price: 850000,
            availableSeats: 50,
            type: "Tốc Hành"
        },
        {
            id: 5,
            name: "SE4",
            departureStation: "Đà Nẵng",
            arrivalStation: "TP. Hồ Chí Minh",
            departureTime: "2024-03-22T06:00:00",
            arrivalTime: "2024-03-22T18:00:00",
            duration: "12h 00m",
            price: 900000,
            availableSeats: 40,
            type: "Tốc Hành"
        },
        {
            id: 6,
            name: "TN2",
            departureStation: "TP. Hồ Chí Minh",
            arrivalStation: "Đà Nẵng",
            departureTime: "2024-03-23T11:00:00",
            arrivalTime: "2024-03-23T23:00:00",
            duration: "12h 00m",
            price: 950000,
            availableSeats: 35,
            type: "Địa Phương"
        },
        {
            id: 7,
            name: "SE5",
            departureStation: "Hà Nội",
            arrivalStation: "Đà Nẵng",
            departureTime: "2024-03-24T08:00:00",
            arrivalTime: "2024-03-24T20:00:00",
            duration: "12h 00m",
            price: 1000000,
            availableSeats: 55,
            type: "Tốc Hành"
        },
        {
            id: 8,
            name: "SE6",
            departureStation: "Đà Nẵng",
            arrivalStation: "TP. Hồ Chí Minh",
            departureTime: "2024-03-25T09:00:00",
            arrivalTime: "2024-03-25T21:00:00",
            duration: "12h 00m",
            price: 1100000,
            availableSeats: 60,
            type: "Tốc Hành"
        }
    ],
    flights: [
        {
            id: 1,
            airline: "Vietnam Airlines",
            flightNumber: "VN123",
            departureAirport: "Hà Nội (HAN)",
            arrivalAirport: "TP. Hồ Chí Minh (SGN)",
            departureTime: "2024-03-20T07:00:00",
            arrivalTime: "2024-03-20T09:00:00",
            duration: "2h 00m",
            price: 2500000,
            availableSeats: 20,
            type: "Phổ Thông"
        },
        {
            id: 2,
            airline: "Vietjet Air",
            flightNumber: "VJ456",
            departureAirport: "Hà Nội (HAN)",
            arrivalAirport: "Đà Nẵng (DAD)",
            departureTime: "2024-03-20T08:30:00",
            arrivalTime: "2024-03-20T09:45:00",
            duration: "1h 15m",
            price: 1500000,
            availableSeats: 35,
            type: "Phổ Thông"
        },
        {
            id: 3,
            airline: "Bamboo Airways",
            flightNumber: "QH789",
            departureAirport: "TP. Hồ Chí Minh (SGN)",
            arrivalAirport: "Đà Nẵng (DAD)",
            departureTime: "2024-03-20T10:00:00",
            arrivalTime: "2024-03-20T11:15:00",
            duration: "1h 15m",
            price: 1800000,
            availableSeats: 25,
            type: "Phổ Thông"
        },
        {
            id: 4,
            airline: "Vietnam Airlines",
            flightNumber: "VN222",
            departureAirport: "Đà Nẵng (DAD)",
            arrivalAirport: "Hà Nội (HAN)",
            departureTime: "2024-03-21T12:00:00",
            arrivalTime: "2024-03-21T13:15:00",
            duration: "1h 15m",
            price: 1400000,
            availableSeats: 40,
            type: "Phổ Thông"
        },
        {
            id: 5,
            airline: "Vietjet Air",
            flightNumber: "VJ333",
            departureAirport: "TP. Hồ Chí Minh (SGN)",
            arrivalAirport: "Hà Nội (HAN)",
            departureTime: "2024-03-22T14:00:00",
            arrivalTime: "2024-03-22T16:00:00",
            duration: "2h 00m",
            price: 2300000,
            availableSeats: 30,
            type: "Phổ Thông"
        },
        {
            id: 6,
            airline: "Bamboo Airways",
            flightNumber: "QH888",
            departureAirport: "Đà Nẵng (DAD)",
            arrivalAirport: "TP. Hồ Chí Minh (SGN)",
            departureTime: "2024-03-23T15:00:00",
            arrivalTime: "2024-03-23T16:30:00",
            duration: "1h 30m",
            price: 1700000,
            availableSeats: 28,
            type: "Phổ Thông"
        },
        {
            id: 7,
            airline: "Vietnam Airlines",
            flightNumber: "VN555",
            departureAirport: "Hà Nội (HAN)",
            arrivalAirport: "Đà Nẵng (DAD)",
            departureTime: "2024-03-24T17:00:00",
            arrivalTime: "2024-03-24T18:15:00",
            duration: "1h 15m",
            price: 1600000,
            availableSeats: 32,
            type: "Phổ Thông"
        },
        {
            id: 8,
            airline: "Vietjet Air",
            flightNumber: "VJ999",
            departureAirport: "Đà Nẵng (DAD)",
            arrivalAirport: "TP. Hồ Chí Minh (SGN)",
            departureTime: "2024-03-25T19:00:00",
            arrivalTime: "2024-03-25T20:30:00",
            duration: "1h 30m",
            price: 1550000,
            availableSeats: 22,
            type: "Phổ Thông"
        },
        {
            id: 9,
            airline: "Vietnam Airlines",
            flightNumber: "VN611",
            departureAirport: "Hà Nội (HAN)",
            arrivalAirport: "Bangkok (BKK)",
            departureTime: "2024-03-26T09:00:00",
            arrivalTime: "2024-03-26T11:00:00",
            duration: "2h 00m",
            price: 2500000,
            availableSeats: 18,
            type: "Quốc Tế"
        },
        {
            id: 10,
            airline: "Singapore Airlines",
            flightNumber: "SQ183",
            departureAirport: "TP. Hồ Chí Minh (SGN)",
            arrivalAirport: "Singapore (SIN)",
            departureTime: "2024-03-27T13:00:00",
            arrivalTime: "2024-03-27T16:00:00",
            duration: "2h 00m",
            price: 2800000,
            availableSeats: 20,
            type: "Quốc Tế"
        },
        {
            id: 11,
            airline: "Korean Air",
            flightNumber: "KE480",
            departureAirport: "Hà Nội (HAN)",
            arrivalAirport: "Seoul (ICN)",
            departureTime: "2024-03-28T23:00:00",
            arrivalTime: "2024-03-29T05:00:00",
            duration: "4h 00m",
            price: 5000000,
            availableSeats: 15,
            type: "Quốc Tế"
        },
        {
            id: 12,
            airline: "Japan Airlines",
            flightNumber: "JL750",
            departureAirport: "TP. Hồ Chí Minh (SGN)",
            arrivalAirport: "Tokyo (NRT)",
            departureTime: "2024-03-29T00:30:00",
            arrivalTime: "2024-03-29T08:00:00",
            duration: "6h 30m",
            price: 6000000,
            availableSeats: 12,
            type: "Quốc Tế"
        }
    ],
    users: [
        {
            id: 1,
            username: "user1",
            password: "password123",
            email: "nhom1@gmail.com",
            fullName: "Nhom1TH2729",
            phone: "0123456789"
        }
    ],
    bookings: []
};

// Helper functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

function formatDateTime(dateTimeStr) {
    return new Date(dateTimeStr).toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date to today for all date inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.min = today;
    });

    // Prevent selecting same origin and destination
    const fromSelects = document.querySelectorAll('select[name="from"]');
    const toSelects = document.querySelectorAll('select[name="to"]');

    fromSelects.forEach((fromSelect, index) => {
        fromSelect.addEventListener('change', () => {
            const toSelect = toSelects[index];
            const selectedFrom = fromSelect.value;
            
            Array.from(toSelect.options).forEach(option => {
                if (option.value === selectedFrom) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });

            if (toSelect.value === selectedFrom) {
                toSelect.value = '';
            }
        });
    });

    toSelects.forEach((toSelect, index) => {
        toSelect.addEventListener('change', () => {
            const fromSelect = fromSelects[index];
            const selectedTo = toSelect.value;
            
            Array.from(fromSelect.options).forEach(option => {
                if (option.value === selectedTo) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });

            if (fromSelect.value === selectedTo) {
                fromSelect.value = '';
            }
        });
    });

    // Handle form submissions
    document.addEventListener('submit', function(e) {
        if (e.target.matches('form')) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            // Store form data in localStorage for demo purposes
            localStorage.setItem('lastSearch', JSON.stringify(data));
            
            // Redirect to appropriate page
            if (e.target.action.includes('search-results')) {
                window.location.href = e.target.action + '?' + new URLSearchParams(data).toString();
            } else if (e.target.action.includes('book-ticket')) {
                window.location.href = 'book-ticket.html?' + new URLSearchParams(data).toString();
            }
        }
    });
});

// Handle ticket booking
function bookTicket(type, id) {
    const trip = type === 'train' ? 
        mockData.trains.find(t => t.id === id) : 
        mockData.flights.find(f => f.id === id);
    
    if (trip) {
        localStorage.setItem('selectedTrip', JSON.stringify(trip));
        window.location.href = `book-ticket.html?type=${type}&id=${id}`;
    }
}

// Handle ticket cancellation
function cancelTicket(ticketId) {
    if (confirm('Bạn có chắc chắn muốn hủy vé này?')) {
        const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
        const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
        localStorage.setItem('tickets', JSON.stringify(updatedTickets));
        location.reload();
    }
}

// Handle ticket download
function downloadTicket(ticketId) {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const ticket = tickets.find(t => t.id === ticketId);
    if (ticket) {
        // In a real application, this would generate and download a PDF
        alert('Đang tải vé...');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Export functions and data
window.mockData = mockData;
window.formatCurrency = formatCurrency;
window.formatDateTime = formatDateTime;
window.formatDate = formatDate;
window.formatTime = formatTime;
window.bookTicket = bookTicket;
window.cancelTicket = cancelTicket;
window.downloadTicket = downloadTicket;
window.logout = logout;

document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const priceRange = document.getElementById('priceRange').value;
    const timeRange = document.getElementById('timeRange').value;
    const dateFilter = document.getElementById('dateFilter').value;
    const airlineFilter = document.getElementById('airlineFilter') ? document.getElementById('airlineFilter').value : 'all';
    const ticketTypeFilter = document.getElementById('ticketTypeFilter').value;

    let results = type === 'train' ? mockData.trains : mockData.flights;

    // Lọc theo giá
    if (priceRange !== 'all') {
        if (priceRange === '0-1000000') {
            results = results.filter(item => item.price < 1000000);
        } else if (priceRange === '1000000-2000000') {
            results = results.filter(item => item.price >= 1000000 && item.price <= 2000000);
        } else if (priceRange === '2000000+') {
            results = results.filter(item => item.price > 2000000);
        }
    }

    // Lọc theo khung giờ
    if (timeRange !== 'all') {
        results = results.filter(item => {
            const hour = new Date(item.departureTime).getHours();
            if (timeRange === 'morning') return hour >= 6 && hour < 12;
            if (timeRange === 'afternoon') return hour >= 12 && hour < 18;
            if (timeRange === 'evening') return hour >= 18 && hour <= 23;
            return true;
        });
    }

    // Lọc theo ngày
    if (dateFilter) {
        results = results.filter(item => {
            const d = new Date(item.departureTime);
            const dStr = d.toISOString().split('T')[0];
            return dStr === dateFilter;
        });
    }

    // Lọc theo hãng bay (chỉ flight)
    if (type === 'flight' && airlineFilter && airlineFilter !== 'all') {
        results = results.filter(item => item.airline === airlineFilter);
    }

    // Lọc theo loại vé
    if (ticketTypeFilter && ticketTypeFilter !== 'all') {
        results = results.filter(item => item.type === ticketTypeFilter);
    }

    // Lọc theo điểm đi và điểm đến nếu có
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const to = urlParams.get('to');
    if (from) {
        results = results.filter(item =>
            (type === 'train' ? item.departureStation : item.departureAirport) === from
        );
    }
    if (to) {
        results = results.filter(item =>
            (type === 'train' ? item.arrivalStation : item.arrivalAirport) === to
        );
    }

    // Hiển thị kết quả đã lọc
    displayResultsWithData(results, type);
});

function displayResults(type) {
    let results = type === 'train' ? mockData.trains : mockData.flights;

    // Lọc theo điểm đi và điểm đến nếu có (giống như trong submit)
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const to = urlParams.get('to');
    if (from) {
        results = results.filter(item =>
            (type === 'train' ? item.departureStation : item.departureAirport) === from
        );
    }
    if (to) {
        results = results.filter(item =>
            (type === 'train' ? item.arrivalStation : item.arrivalAirport) === to
        );
    }

    displayResultsWithData(results, type);
}

function displayResultsWithData(results, type) {
    const container = document.getElementById('searchResults');
    container.innerHTML = '';
    if (results.length === 0) {
        container.innerHTML = '<div class="alert alert-warning">Không tìm thấy chuyến nào phù hợp.</div>';
        return;
    }
    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card result-card mb-3';
        if (type === 'train') {
            card.innerHTML = `
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="card-title">
                                <i class="fas fa-train me-2"></i>${item.name} - ${item.type}
                            </h5>
                            <p class="card-text">
                                <strong>Điểm Đi:</strong> ${item.departureStation}<br>
                                <strong>Điểm Đến:</strong> ${item.arrivalStation}<br>
                                <strong>Giờ Khởi Hành:</strong> ${formatDateTime(item.departureTime)}<br>
                                <strong>Giờ Đến:</strong> ${formatDateTime(item.arrivalTime)}<br>
                                <span class="duration"><i class="fas fa-clock me-1"></i>${item.duration}</span>
                            </p>
                        </div>
                        <div class="col-md-4 text-end">
                            <div class="price-tag mb-2">${formatCurrency(item.price)}</div>
                            <p class="available-seats">
                                <i class="fas fa-chair me-1"></i>Còn ${item.availableSeats} chỗ
                            </p>
                            <button onclick="bookTicket('train', ${item.id})" class="btn btn-primary">Đặt Vé</button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="card-title">
                                <i class="fas fa-plane me-2"></i>${item.airline} - ${item.flightNumber}
                            </h5>
                            <p class="card-text">
                                <strong>Điểm Đi:</strong> ${item.departureAirport}<br>
                                <strong>Điểm Đến:</strong> ${item.arrivalAirport}<br>
                                <strong>Giờ Khởi Hành:</strong> ${formatDateTime(item.departureTime)}<br>
                                <strong>Giờ Đến:</strong> ${formatDateTime(item.arrivalTime)}<br>
                                <span class="duration"><i class="fas fa-clock me-1"></i>${item.duration}</span>
                            </p>
                        </div>
                        <div class="col-md-4 text-end">
                            <div class="price-tag mb-2">${formatCurrency(item.price)}</div>
                            <p class="available-seats">
                                <i class="fas fa-chair me-1"></i>Còn ${item.availableSeats} chỗ
                            </p>
                            <button onclick="bookTicket('flight', ${item.id})" class="btn btn-primary">Đặt Vé</button>
                        </div>
                    </div>
                </div>
            `;
        }
        container.appendChild(card);
    });
} 