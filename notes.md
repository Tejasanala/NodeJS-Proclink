# NodeJS - environment to run JS

why Node js ?? why not browsers??

- browsers doent allow to do CRUD operations.

- Browsers are restricted.

1. cannot access file system.
2. cannot access hardware details.
3. cannot copy files.
4. cannot delete the files.

## Famous Virus

- Love Virus

- worm virus : replicates the file and adds moreeeeeee file until your disk is full.

## Node JS Usage

- used to build webapplications.
- web scraping
-

##

- node doesnt have DOM
- because of this document.\* (document.querySelector) such are not available.
- window methods are not accessable.
- we dont have event listeners.

## Inbuilt packages

- OS : require("os);
- It gives the info about RAM ,CPU
  Ex: auto Scaling condition

-fs : fileSystem

## 5-08-24

## Node.js architecture

- The Node.js has replicated the browser from chrome which is V8 engine.

- the functionalities which are not in V8 engine are:

- os operation - It performs os operation.

- Node.js Bindings (NodeAPi) contains packages like os , fs.

> libuv - interface converts into os command(Normal)

> fs will use 3 different files and converts the fs interface into OS command.(Reality)

- libuv is used for the node package developers(to develop the orginal package)...We dont use it most.

- We can open that particular file there only (symlinking).if one place we changed everywhere it is changed.

- To delete a file -> unlink(" filename")

# 9/08/24

## There are three datatypes:

- Scalar :string,number,boolean

- Document : List(Array of strings or number ),Map(obj),

- set : no duplications

-- If we are adding any new attribute then we need to update the version as version 2
