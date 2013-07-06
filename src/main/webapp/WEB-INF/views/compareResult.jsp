<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
    <head>
        <title>Result</title>
        <link href="<c:url value="/assets/css/all.css"/>" type="text/css" rel="stylesheet"/>

    </head>
    <body>
        <h1><c:out value="${output}"></c:out></h1>
        <section>
            <a href="<c:url value="assets/css/all.css"/>">Assets</a>
            <a href="assets/css/all.css">Assets using relative path</a>

            <a href="./info.jsp">Go info page</a>
            <a href="info.jsp">Go info page too </a>
            <a href="<c:url value="info.jsp"/>">three</a>
        </section>
    </body>
</html>
