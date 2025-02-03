# Crypto AddyTracker

This is the repository for the website [Crypto AddyTracker](https://www.cryptoaddytracker.com/), a platform that enables users to easily create personalized profile websites that displays all their cryptocurrency addresses in one place.

## Getting Started

To get a local copy up and running, follow the steps below.

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repo: ```git clone https://github.com/CMPUT301F24dragon/lucky-dragons.git```
2. Install NPM packages: ```npm install```
3. Create a ```.env.local``` file and add the following things:
```sh
MONGO_URI = your_mongodb_uri
NEXTAUTH_URL = http://localhost:3000/
GOOGLE_CLIENT_ID = your_google_client_id
GOOGLE_CLIENT_SECRET = your_google_client_secret
SECRET = ABCDEF
BUCKET_NAME = "s3_bucket_name"
S3_ACCESS_KEY = your_s3_access_key
S3_SECRET_ACCESS_KEY = your_s3_secret_access_key
```
4. Run the development server: ```npm run dev```

## Contributing 
Feel free to make a pull request and I will try to review it as quickly as possible. Any contributions you make are greatly appreciated.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
