<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<%@ page session="false" %>
<html>
    <head>
        <title>Home</title>
        <link href="<c:url value="/assets/css/lib/bootstrap.css"/>" type="text/css" rel="stylesheet"/>
        <link href="<c:url value="/assets/css/all.css"/>" type="text/css" rel="stylesheet"/>
        <script type="text/javascript" src="<c:url value="/assets/js/lib/jquery-2.0.3.js"/>"></script>
        <script type="text/javascript" src="<c:url value="/assets/js/lib/bootstrap.js"/>"></script>
        <script type="text/javascript" src="<c:url value="/assets/js/lib/angular.js"/>"></script>
        <script type="text/javascript" src="<c:url value="/assets/js/lib/modernizr-latest.js"/>"></script>
        <script type="text/javascript" src="<c:url value="/assets/js/all.js"/>"></script>
    </head>
    <body ng-app="simple" class="container">
    <div ng-controller="tooltipCtrl" class="row">
        <h1>{{greeting}}</h1>
        <div class="col-lg-8">

            <form:form action="tooltip" commandName="customer" method="POST" >
                <ul>
                    <li s-tooltip>

                        <label>
                            <span>Your name:</span>
                            <img src="<c:url value="/assets/img/question.jpg"/>" class="tooltip-class">
                        </label>
                        <form:input path="name"/>
                    </li>
                    <li>
                        <label>Your age:</label>
                        <form:input path="age"/>
                    </li>
                </ul>
            </form:form>
        </div>
        <div class="col-lg-4">
            <div>This is right column</div>
        </div>
    </div>

    <div class="row show-grid">
        <div class="col-lg-8">8</div>
        <div class="col-lg-4">4</div>
    </div>
    </body>
</html>

