import React, { useEffect, useState } from 'react';

const BooksData = () => {
    const [material, setMaterial] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sample = {
        "statusCode": 200,
        "data": {
          "kind": "books#volume",
          "id": 149,
          "etag": "NC+aB/IMD+A",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/mfgEAQAAQBAJ",
          "volumeInfo": {
            "title": "Free-Ranging Dogs and Wildlife Conservation",
            "authors": [
              "Matthew E. Gompper"
            ],
            "publisher": "Oxford University Press",
            "publishedDate": "2013-10",
            "description": "This edited volume adopts a global perspective to review how dogs interact with wildlife, how humans perceive these interactions, the potential importance of dog-wildlife interactions, and the scope of the problems.",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9780199663217"
              },
              {
                "type": "ISBN_10",
                "identifier": "0199663211"
              }
            ],
            "readingModes": {
              "text": false,
              "image": true
            },
            "pageCount": 329,
            "printType": "BOOK",
            "categories": [
              "Nature"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.2.0.0.preview.1",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=mfgEAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=mfgEAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.co.in/books?id=mfgEAQAAQBAJ&printsec=frontcover&dq=wildlife&hl=&cd=9&source=gbs_api",
            "infoLink": "http://books.google.co.in/books?id=mfgEAQAAQBAJ&dq=wildlife&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Free_Ranging_Dogs_and_Wildlife_Conservat.html?hl=&id=mfgEAQAAQBAJ"
          },
          "saleInfo": {
            "country": "IN",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "IN",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
              "isAvailable": false
            },
            "pdf": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.co.in/books/download/Free_Ranging_Dogs_and_Wildlife_Conservat-sample-pdf.acsm?id=mfgEAQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=mfgEAQAAQBAJ&hl=&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "This edited volume adopts a global perspective to review how dogs interact with wildlife, how humans perceive these interactions, the potential importance of dog-wildlife interactions, and the scope of the problems."
          }
        },
        "message": "Book fetched successfully",
        "success": true
      }

    const url = "http://localhost:8080/api/v1/public/books/book/random";

    const fetchingApiData = async (url) => {
        try {
            const resource = await fetch(url);
            const data = await resource.json();
            setMaterial(data);
            console.log(data)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchingApiData(url);
    }, []);

    const newBook = () =>{
        fetchingApiData(url);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full h-screen text-black bg-gray-700 flex flex-col items-center justify-center">
            <div className="px-3 py-3 rounded-2xl flex   bg-black">
                    <img className="w-[200px] h-[250px] rounded-tl-xl rounded-bl-xl" src={material.data.volumeInfo.imageLinks.smallThumbnail ? material.data.volumeInfo.imageLinks.smallThumbnail : BooksData.data.volumeInfo.imageLinks.smallThumbnail } alt={material.data.volumeInfo.title} />
                <div className="w-[550px] h-[250px] text-[20px] px-4 rounded-tr-xl rounded-br-xl py-6 bg-white overflow-y-scroll text-wrap">
                    <h1 className=' text-center uppercase font-bold'>"{material.data.volumeInfo.title}"</h1>
                    <h1 className="font-bold italic text-center pb-3"><span className='text-[15px] font-normal'>By. </span>{material.data.volumeInfo.authors}</h1>
                    <h1 className=""> Published on : <span className="font-bold italic">"{material.data.volumeInfo.publishedDate}"</span></h1>
                    {material.data.volumeInfo.subtitle && (<h1 className=' font-bold'>Label: {material.data.volumeInfo.subtitle}</h1>)}
                    {material.data.volumeInfo.description && (<h1 className='mt-2 text-center'>{material.data.volumeInfo.description}</h1>)}
                    <div className='flex justify-end'>
                    {material.data.accessInfo.pdf.acsTokenLink && <a href={`${material.data.accessInfo.pdf.acsTokenLink}`} ><button className=' text-[15px] mt-4 bg-green-500 rounded-3xl px-4 py-2'>Get Book</button></a>}
                    </div>
                </div>
            </div>
                    <button className=' text-[15px] mt-4 bg-blue-500 rounded-3xl px-4 py-2'onClick={newBook}>Next</button>
        </div>
    );
};

export default BooksData;
