<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
    <head>
        <title>Home</title>
        <link href="<c:url value="/assets/css/all.css"/>" type="text/css" rel="stylesheet"/>
    </head>
    <body>
        <h1>Hello world!</h1>

        <p>Context path: ${pageContext.request.contextPath}</p>
        <p>Servlet path: ${pageContext.request.servletPath}</p>
        <p>Request uri: ${pageContext.request.requestURI}</p>
        <p>Request url: ${pageContext.request.requestURL}</p>

        <p class="explanation">
        explanation: if the input of c:url is a relative path and start with a '/', then the contextpath will be added as prefix,
            if it is an absolute path or without a '/', nothing will be added
            <ul>
            <li>the result of &ltc:url&gt value="/compare" is: <c:url value="/compare"/></li>
            <li>the result of &ltc:url&gt value="compare" is: <c:url value="compare"/></li>
            <li>plain one: /compare</li>
            </ul>
        </p>

        <section>
            <a href="<c:url value="compare?input1=Donkey&input2=dog"/>">Go to compare using jstl c:url </a>
            <a href="compare?input1=Donkey&input2=dog">Go to compare using relative url </a>
            <a href="/compare?input1=Donkey&input2=dog">Can't Go to compare using webapp url </a>
            <a href="<c:url value="http://localhost:8080/simpleSpringMVC/compare?input1=Donkey&input2=dog"/>">Go to compare using absolute url </a>

            <a href="./info.jsp">Go info page</a>
            <a href="info.jsp">Go info page too </a>
            <a href="<c:url value="info.jsp"/>">three</a>
        </section>
    </body>
</html>

