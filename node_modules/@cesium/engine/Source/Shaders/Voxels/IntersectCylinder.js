//This file is automatically rebuilt by the Cesium build process.
export default "// See IntersectionUtils.glsl for the definitions of Ray, NO_HIT,\n\
// setIntersection, setIntersectionPair, setShapeIntersection\n\
// See IntersectLongitude.glsl for the definitions of intersectHalfPlane,\n\
// intersectFlippedWedge, intersectRegularWedge\n\
\n\
/* Cylinder defines (set in Scene/VoxelCylinderShape.js)\n\
#define CYLINDER_HAS_RENDER_BOUNDS_RADIUS_MIN\n\
#define CYLINDER_HAS_RENDER_BOUNDS_RADIUS_MAX\n\
#define CYLINDER_HAS_RENDER_BOUNDS_RADIUS_FLAT\n\
#define CYLINDER_HAS_RENDER_BOUNDS_HEIGHT\n\
#define CYLINDER_HAS_RENDER_BOUNDS_HEIGHT_FLAT\n\
#define CYLINDER_HAS_RENDER_BOUNDS_ANGLE\n\
#define CYLINDER_HAS_RENDER_BOUNDS_ANGLE_RANGE_UNDER_HALF\n\
#define CYLINDER_HAS_RENDER_BOUNDS_ANGLE_RANGE_OVER_HALF\n\
#define CYLINDER_HAS_RENDER_BOUNDS_ANGLE_RANGE_EQUAL_ZERO\n\
\n\
#define CYLINDER_INTERSECTION_INDEX_RADIUS_MAX\n\
#define CYLINDER_INTERSECTION_INDEX_RADIUS_MIN\n\
#define CYLINDER_INTERSECTION_INDEX_ANGLE\n\
*/\n\
\n\
// Cylinder uniforms\n\
#if defined(CYLINDER_HAS_RENDER_BOUNDS_RADIUS_MAX) || defined(CYLINDER_HAS_RENDER_BOUNDS_HEIGHT)\n\
    uniform vec3 u_cylinderUvToRenderBoundsScale;\n\
    uniform vec3 u_cylinderUvToRenderBoundsTranslate;\n\
#endif\n\
#if defined(CYLINDER_HAS_RENDER_BOUNDS_RADIUS_MIN) && !defined(CYLINDER_HAS_RENDER_BOUNDS_RADIUS_FLAT)\n\
    uniform float u_cylinderUvToRenderRadiusMin;\n\
#endif\n\
#if defined(CYLINDER_HAS_RENDER_BOUNDS_ANGLE)\n\
    uniform vec2 u_cylinderRenderAngleMinMax;\n\
#endif\n\
\n\
vec2 intersectUnitCylinder(Ray ray)\n\
{\n\
    vec3 o = ray.pos;\n\
    vec3 d = ray.dir;\n\
\n\
    float a = dot(d.xy, d.xy);\n\
    float b = dot(o.xy, d.xy);\n\
    float c = dot(o.xy, o.xy) - 1.0;\n\
    float det = b * b - a * c;\n\
\n\
    if (det < 0.0) {\n\
        return vec2(NO_HIT);\n\
    }\n\
\n\
    det = sqrt(det);\n\
    float ta = (-b - det) / a;\n\
    float tb = (-b + det) / a;\n\
    float t1 = min(ta, tb);\n\
    float t2 = max(ta, tb);\n\
\n\
    float z1 = o.z + t1 * d.z;\n\
    float z2 = o.z + t2 * d.z;\n\
\n\
    if (abs(z1) >= 1.0)\n\
    {\n\
        float tCap = (sign(z1) - o.z) / d.z;\n\
        t1 = abs(b + a * tCap) < det ? tCap : NO_HIT;\n\
    }\n\
\n\
    if (abs(z2) >= 1.0)\n\
    {\n\
        float tCap = (sign(z2) - o.z) / d.z;\n\
        t2 = abs(b + a * tCap) < det ? tCap : NO_HIT;\n\
    }\n\
\n\
    return vec2(t1, t2);\n\
}\n\
\n\
vec2 intersectUnitCircle(Ray ray) {\n\
    vec3 o = ray.pos;\n\
    vec3 d = ray.dir;\n\
\n\
    float t = -o.z / d.z;\n\
    vec2 zPlanePos = o.xy + d.xy * t;\n\
    float distSqr = dot(zPlanePos, zPlanePos);\n\
\n\
    if (distSqr > 1.0) {\n\
        return vec2(NO_HIT);\n\
    }\n\
\n\
    return vec2(t, t);\n\
}\n\
\n\
vec2 intersectInfiniteUnitCylinder(Ray ray)\n\
{\n\
    vec3 o = ray.pos;\n\
    vec3 d = ray.dir;\n\
\n\
    float a = dot(d.xy, d.xy);\n\
    float b = dot(o.xy, d.xy);\n\
    float c = dot(o.xy, o.xy) - 1.0;\n\
    float det = b * b - a * c;\n\
\n\
    if (det < 0.0) {\n\
        return vec2(NO_HIT);\n\
    }\n\
\n\
    det = sqrt(det);\n\
    float t1 = (-b - det) / a;\n\
    float t2 = (-b + det) / a;\n\
    float tmin = min(t1, t2);\n\
    float tmax = max(t1, t2);\n\
\n\
    return vec2(tmin, tmax);\n\
}\n\
\n\
void intersectShape(Ray ray, inout Intersections ix)\n\
{\n\
    #if defined(CYLINDER_HAS_RENDER_BOUNDS_RADIUS_MAX) || defined(CYLINDER_HAS_RENDER_BOUNDS_HEIGHT)\n\
        ray.pos = ray.pos * u_cylinderUvToRenderBoundsScale + u_cylinderUvToRenderBoundsTranslate;\n\
        ray.dir *= u_cylinderUvToRenderBoundsScale;\n\
    #else\n\
        // Position is converted from [0,1] to [-1,+1] because shape intersections assume unit space is [-1,+1].\n\
        // Direction is scaled as well to be in sync with position.\n\
        ray.pos = ray.pos * 2.0 - 1.0;\n\
        ray.dir *= 2.0;\n\
    #endif\n\
\n\
    #if defined(CYLINDER_HAS_RENDER_BOUNDS_HEIGHT_FLAT)\n\
        vec2 outerIntersect = intersectUnitCircle(ray);\n\
    #else\n\
        vec2 outerIntersect = intersectUnitCylinder(ray);\n\
    #endif\n\
\n\
    setIntersectionPair(ix, CYLINDER_INTERSECTION_INDEX_RADIUS_MAX, outerIntersect);\n\
\n\
    if (outerIntersect.x == NO_HIT) {\n\
        return;\n\
    }\n\
\n\
    #if defined(CYLINDER_HAS_RENDER_BOUNDS_RADIUS_FLAT)\n\
        // When the cylinder is perfectly thin it's necessary to sandwich the\n\
        // inner cylinder intersection inside the outer cylinder intersection.\n\
\n\
        // Without this special case,\n\
        // [outerMin, outerMax, innerMin, innerMax] will bubble sort to\n\
        // [outerMin, innerMin, outerMax, innerMax] which will cause the back\n\
        // side of the cylinder to be invisible because it will think the ray\n\
        // is still inside the inner (negative) cylinder after exiting the\n\
        // outer (positive) cylinder.\n\
\n\
        // With this special case,\n\
        // [outerMin, innerMin, innerMax, outerMax] will bubble sort to\n\
        // [outerMin, innerMin, innerMax, outerMax] which will work correctly.\n\
\n\
        // Note: If initializeIntersections() changes its sorting function\n\
        // from bubble sort to something else, this code may need to change.\n\
        vec2 innerIntersect = intersectInfiniteUnitCylinder(ray);\n\
        setIntersection(ix, 0, outerIntersect.x, true, true);   // positive, enter\n\
        setIntersection(ix, 1, innerIntersect.x, false, true);  // negative, enter\n\
        setIntersection(ix, 2, innerIntersect.y, false, false); // negative, exit\n\
        setIntersection(ix, 3, outerIntersect.y, true, false);  // positive, exit\n\
    #elif defined(CYLINDER_HAS_RENDER_BOUNDS_RADIUS_MIN)\n\
        Ray innerRay = Ray(ray.pos * u_cylinderUvToRenderRadiusMin, ray.dir * u_cylinderUvToRenderRadiusMin);\n\
        vec2 innerIntersect = intersectInfiniteUnitCylinder(innerRay);\n\
        setIntersectionPair(ix, CYLINDER_INTERSECTION_INDEX_RADIUS_MIN, innerIntersect);\n\
    #endif\n\
\n\
    #if defined(CYLINDER_HAS_RENDER_BOUNDS_ANGLE_RANGE_UNDER_HALF)\n\
        RayShapeIntersection wedgeIntersect = intersectRegularWedge(ray, u_cylinderRenderAngleMinMax);\n\
        setShapeIntersection(ix, CYLINDER_INTERSECTION_INDEX_ANGLE, wedgeIntersect);\n\
    #elif defined(CYLINDER_HAS_RENDER_BOUNDS_ANGLE_RANGE_OVER_HALF)\n\
        RayShapeIntersection wedgeIntersects[2];\n\
        intersectFlippedWedge(ray, u_cylinderRenderAngleMinMax, wedgeIntersects);\n\
        setShapeIntersection(ix, CYLINDER_INTERSECTION_INDEX_ANGLE + 0, wedgeIntersects[0]);\n\
        setShapeIntersection(ix, CYLINDER_INTERSECTION_INDEX_ANGLE + 1, wedgeIntersects[1]);\n\
    #elif defined(CYLINDER_HAS_RENDER_BOUNDS_ANGLE_RANGE_EQUAL_ZERO)\n\
        RayShapeIntersection wedgeIntersects[2];\n\
        intersectHalfPlane(ray, u_cylinderRenderAngleMinMax.x, wedgeIntersects);\n\
        setShapeIntersection(ix, CYLINDER_INTERSECTION_INDEX_ANGLE + 0, wedgeIntersects[0]);\n\
        setShapeIntersection(ix, CYLINDER_INTERSECTION_INDEX_ANGLE + 1, wedgeIntersects[1]);\n\
    #endif\n\
}\n\
";
