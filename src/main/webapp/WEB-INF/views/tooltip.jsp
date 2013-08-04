<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<%@ page session="false" %>
<html>
    <head>
        <title>Home</title>
        <link href="<c:url value="/assets/css/all.css"/>" type="text/css" rel="stylesheet"/>
        <script type="text/javascript" src="<c:url value="/assets/js/all.js"/>"></script>
    </head>
    <body>
        <h1>This is to test tooltip</h1>

        <form:form action="tooltip" commandName="customer" method="POST">
            <ul>
                <li>
                    <label>Your name:</label>
                    <form:input path="name"/>
                </li>
                <li>
                    <label>Your age:</label>
                    <form:input path="age"/>
                </li>
            </ul>
            <label>
        </form:form>


    </body>
</html>

