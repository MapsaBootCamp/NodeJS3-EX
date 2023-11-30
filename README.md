# NodeJS3-EX
## Week2


**Exercise 1**: Read and Write Streams

Task: Create a program that reads data from one file and writes it to another using
streams.

* Read data from a file named input.txt (create a file with some line of texts).
* Write the data to a new file named output.txt using a writable stream.

-----------------------------------------------------------------------------------------

**Exercise 2**: Transform Streams

Task: Use a transform stream to convert a CSV file to JSON.

* Read data from a CSV file (input.csv, search on google about csv files and create
an example for yourself).
* Use a transform stream to convert each CSV row to a JSON object.
* Write the JSON objects to a new file (output.json) using a writable stream.

----------------------------------------------------------------------------------------

**Exercise 3**: Piping Streams

Task: Implement a program that reads an image file, applies a watermark, and saves the
modified image.

* Read an image file (input.jpg, every image file that you prefer!).
* Use a readable stream for the image and a writable stream for the modified
image.
* Apply a watermark to the image using a transform stream.(search on the web
about watermarks and how to make them.)
* Save the modified image to a new file (output_watermarked.jpg).


----------------------------------------------------------------------------------------


**Exercise 4**: Compress and Decompress Streams

Task: Build a program that compresses and decompresses text using streams.

* Create a readable stream with sample text data.
* Use a transform stream to compress the text (you can use the zlib module).
* Use a writable stream to save the compressed text to a file (compressed.txt).
* Read the compressed text from the file and decompress it using a transform
stream.
* Save the decompressed text to another file (decompressed.txt).


----------------------------------------------------------------------------------------


**Exercise 5**: Concatenating Streams

Task: Concatenate the contents of multiple files into a single file using streams.

* Read data from three different files (file1.txt, file2.txt, file3.txt).
* Use readable streams for each file and concatenate them into a single writable
stream.
* Save the concatenated data to a new file (concatenated.txt).

----------------------------------------------------------------------------------------

**Exercise 6**: HTTP Server with Streams

Task: Create an HTTP server that streams a large file to the client.

* Create an HTTP server using the http module.
* Read a large file (largefile.txt) using a readable stream.
* Pipe the contents of the file to the response object.
